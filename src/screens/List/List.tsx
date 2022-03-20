import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import { DataContext } from '../../context/DataContext';
import { useNavigation } from '@react-navigation/native';
import useZustand from '../../store/store';
import styles from './styles';

const List = ({ route }: any) => {
  const { name } = useContext<any>(DataContext);
    console.log('List', route.options);

  const navigation = useNavigation<any>();
  const store = useZustand();
  const getList = () => {
    return store.boards.filter((list: any) => list.title === name.current)[0];
  }
  const list = getList();
  

  return (
    <View style={styles.view}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {list.items.map((label: string, index: number) => (
          <ListItem 
            key={index}
            label={label}
            checked={index%2 === 0}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => navigation.navigate('add-items')} />
    </View>
  )
}

export default List;