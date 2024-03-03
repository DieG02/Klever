import Voice, { SpeechErrorEvent, SpeechRecognizedEvent, SpeechResultsEvent } from '@react-native-voice/voice';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { MicrophoneIcon, PlusIcon, StopIcon } from 'react-native-heroicons/mini';

import { Colors, Poppins } from '../styles/global';

interface FooterInputProps {
  onPress: Function;
  placeholder?: string;
  allowSpeaker?: boolean;
}
export default function TextInputCollection({ placeholder = 'Add', onPress, allowSpeaker }: FooterInputProps) {
  const [recognized, setRecognized] = useState('');
  const [volume, setVolume] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);

  
  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
    setRecognized('√');
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  // const onSpeechResults = (e: SpeechResultsEvent) => {
  const onSpeechResults = (e: any) => {
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const onSpeechVolumeChanged = (e: any) => {
    console.log('onSpeechVolumeChanged: ', e);
    setVolume(e.value);
  };

  const _startRecognizing = async () => {
    _clearState();
    try {
      await Voice.start('es-MX');
      console.log('called start');
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
  };

  const _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    _clearState();
  };

  const _clearState = () => {
    setRecognized('');
    setVolume('');
    setError('');
    setEnd('');
    setStarted('');
    setResults([]);
  };


  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  return (
    <View style={styles.footer}>
      <Text>
        Press the button and start speaking.
      </Text>
      <Text>{`Started: ${started}`}</Text>
      <Text>{`Recognized: ${recognized}`}</Text>
      <Text>{`Volume: ${volume}`}</Text>
      <Text>{`Error: ${error}`}</Text>
      
      <Text>Primary Result:
        <Text>{results[0]}</Text>
      </Text>

      <Text>{`End: ${end}`}</Text>
      <TouchableHighlight onPress={_startRecognizing}>
        <MicrophoneIcon color={Colors.Dark}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={_stopRecognizing}>
        <StopIcon color={Colors.Dark}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={_cancelRecognizing}>
        <Text>Cancel</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={_destroyRecognizer}>
        <Text>Destroy</Text>
      </TouchableHighlight>

      
      {/* <View style={styles.modal}>
        <TextInput
          style={styles.input}
          maxLength={40}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />
          {value
            ? <Pressable style={styles.button} onPress={handleOnPress}>
                <PlusIcon color={Colors.White}/>
              </Pressable>
            : <Pressable style={styles.button} onPress={onRecord}>
              {
                isRecording 
                ? <StopIcon color={Colors.White}/>
                : <MicrophoneIcon color={Colors.White}/>
              }
            </Pressable>
          }
      </View> */}
    </View>
  )
};

const styles = StyleSheet.create({

  footer: {
    paddingVertical: 15,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
  },
  modal: {
    backgroundColor: Colors.Light,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontFamily: Poppins.Regular,
    fontSize: 14,
    color: Colors.Dark,
    padding: 0,
  },
  button: {
    backgroundColor: Colors.Primary,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    margin: 10,
  },
});
