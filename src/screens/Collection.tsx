import { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MicrophoneIcon, PlusIcon } from 'react-native-heroicons/mini';

import { Colors, Poppins } from '../styles/global';
import { AppNavigationProps, AppRouteProps } from '../types/Navigation';
import { items } from '../utils/mock.data';
import { Item } from '../components';

interface CollectionProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'Collection'>
}
export default function Collection({ route }: CollectionProps) {
  const { id, title } = route.params;
  const [value, setValue] = useState<string>('');

  const Divider = () => (
    <View style={styles.divider}/>
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.list}
        data={items[id]}
        renderItem={Item}
        ItemSeparatorComponent={Divider}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <View style={styles.modal}>
          <TextInput 
            style={styles.input}
            maxLength={40}
            placeholder='Add new item...'
            value={value}
            onChangeText={setValue}
            />
          <Pressable style={styles.button}>
            {
              value 
              ? <PlusIcon color={Colors.White}/>
              : <MicrophoneIcon color={Colors.White}/>
            }
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  list: {
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.Gray,
  },
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