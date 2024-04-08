import { useState } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../styles/global';
import { Heading } from '../common';
import auth from '@react-native-firebase/auth';
import { updateLocale } from '../../services/firestore/user';

interface LanguageModalProps {
  visible: boolean;
  onRequestClose: () => void;
  current: string;
}

export default function LanguageModal({
  visible,
  onRequestClose,
  current,
}: LanguageModalProps) {
  const [locale, setLocale] = useState<string>(auth().languageCode || current);
  const options = {
    en: 'en-US',
    es: 'es-MX',
  };

  const handleSave = async () => {
    const { success } = await updateLocale(locale);
    if (success) onRequestClose();
  };
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType='fade'
      onRequestClose={onRequestClose}
      statusBarTranslucent>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Heading color='Placeholder' size={10} style={styles.title}>
            Select language
          </Heading>

          <Pressable onPress={() => setLocale(options['en'])}>
            <View
              style={[
                styles.item,
                locale === options['en'] && styles.selected,
              ]}>
              <Heading
                type='Medium'
                style={styles.center}
                color={locale === options['en'] ? 'Primary' : 'Label'}>
                English
              </Heading>
            </View>
          </Pressable>

          <Pressable onPress={() => setLocale(options['es'])}>
            <View
              style={[
                styles.item,
                locale === options['es'] && styles.selected,
              ]}>
              <Heading
                type='Medium'
                style={styles.center}
                color={locale === options['es'] ? 'Primary' : 'Label'}>
                Spanish
              </Heading>
            </View>
          </Pressable>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
              <Heading color='Label' size={12} type='Medium'>
                Cancel
              </Heading>
            </TouchableOpacity>
            <TouchableOpacity style={styles.save} onPress={handleSave}>
              <Heading color='Primary' size={12} type='Medium'>
                Save
              </Heading>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2525259c',
  },
  container: {
    backgroundColor: Colors.White,
    padding: 20,
    borderRadius: 15,
    width: '80%',
  },
  title: {
    marginBottom: 15,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: Colors.White,
  },
  selected: {
    backgroundColor: Colors.Light,
  },

  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    height: 30,
  },
  cancel: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  save: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    textAlign: 'center',
  },
});
