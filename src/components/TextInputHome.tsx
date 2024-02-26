import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/mini';
import { Colors, Poppins } from '../styles/global';
import { useState } from 'react';

interface TextInputHomeProps {
  onPress: (str: string) => void;
}
export default function TextInputHome({ onPress }: TextInputHomeProps) {
  const [value, setValue] = useState<string>('');

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
          <Pressable style={styles.button} onPress={() => onPress(value)}>
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
