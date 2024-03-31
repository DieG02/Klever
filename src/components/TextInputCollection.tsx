import { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from '@react-native-voice/voice';
import {
  MicrophoneIcon,
  PlusIcon,
  StopIcon,
} from 'react-native-heroicons/mini';
import { addItem } from '../services/firestore';
import styles from '../styles/components/TextInputCustom';

export default function TextInputCollection({
  collectionId,
}: {
  collectionId: string;
}) {
  const [error, setError] = useState('');
  const [recording, setRecording] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const _clearState = () => {
    setRecording(false);
    setValue('');
    setError('');
  };
  const _addNewItem = () => {
    const label = value.trim();
    if (!label) return null;
    addItem(collectionId, {
      label: label,
      checked: false,
    });
    setValue('');
  };
  const _startRecognizing = async () => {
    _clearState();
    try {
      await Voice.start('es-MX');
    } catch (e) {
      console.error(e);
    }
  };
  const _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
    _clearState();
  };

  // const services = await Voice.getSpeechRecognitionServices();
  const onSpeechStart = () => {
    setRecording(true);
  };
  const onSpeechEnd = () => {
    setRecording(false);
  };
  const onSpeechError = (e: SpeechErrorEvent) => {
    setError(JSON.stringify(e.error));
    _clearState();
  };
  const onSpeechResults = (e: SpeechResultsEvent) => {
    setValue(e.value![0]);
  };

  const AddNewItemsButton = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={_addNewItem}
        disabled={!value.trim()}>
        <PlusIcon color={styles.icon.color} />
      </TouchableOpacity>
    );
  };
  const StarRecordButton = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={_startRecognizing}>
        <MicrophoneIcon color={styles.icon.color} />
      </TouchableOpacity>
    );
  };
  const StopRecordButton = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={_stopRecognizing}>
        <StopIcon color={styles.icon.color} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          maxLength={40}
          placeholder={'Add new items...'}
          value={value}
          onChangeText={setValue}
        />
        {value ? (
          <AddNewItemsButton />
        ) : recording ? (
          <StopRecordButton />
        ) : (
          <StarRecordButton />
        )}
      </View>
    </View>
  );
}
