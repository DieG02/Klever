import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/mini';
import { Colors, Poppins } from '../styles/global';
import { useState } from 'react';
import { addCard } from '../services/firestore';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '../types/navigation';

export default function TextInputHome() {
  const [value, setValue] = useState<string>('');
  const navigation = useNavigation<AppNavigationProps>();

  const handleOnPress = async () => {
    const cardRef = await addCard(value);
    if(!cardRef.id) return;
    setValue('');
    navigation.navigate('Collection', { 
      id: cardRef.id, 
      title: value 
    });
  }
  return (
    <View style={styles.footer}>
      <View style={styles.modal}>
        <TextInput
          style={styles.input}
          maxLength={40}
          placeholder='Create new list...'
          value={value}
          onChangeText={setValue}
        />
          <Pressable style={styles.button} onPress={handleOnPress}>
            <ArrowRightIcon color={Colors.White}/>
          </Pressable>
      </View>
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
