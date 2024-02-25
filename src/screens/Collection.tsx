import { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CheckIcon, MicrophoneIcon, PlusIcon } from 'react-native-heroicons/mini';

import { Colors, Poppins } from '../styles/global';
import { AppNavigationProps, AppRouteProps } from '../types/Navigation';
import { listData } from '../utils/mock.data';

interface CollectionProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'Collection'>
}
export default function Collection({ route }: CollectionProps) {
  const [value, setValue] = useState<string>('');

  const ListItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemLabel}>
        {item.label}
      </Text>
      <View style={item.isChecked ? styles.itemChecked : styles.itemButton}>
        <CheckIcon color={item.isChecked ? Colors.White : 'transparent'} width={15}/>
      </View>
    </TouchableOpacity>
  );
  const Divider = () => (
    <View style={styles.divider}/>
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.list}
        data={listData}
        renderItem={ListItem}
        ItemSeparatorComponent={Divider}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <View style={styles.modal}>
          <TextInput 
            style={styles.input} 
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
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLabel: {
    fontFamily: Poppins.Regular,
    fontSize: 14,
    color: Colors.Dark,
    paddingVertical: 14,
  },
  itemButton: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemChecked: {
    height: 20,
    width: 20,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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