import React, { useContext } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import { DataContext } from '../../context/DataContext';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const List = ({ route }: any) => {
  const { data } = useContext<any>(DataContext);
  const index = route.params.index;
  const listItems = data[index].items;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.view}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {listItems.map((label: string, index: number) => (
          <ListItem 
            key={index}
            label={label}
            checked={index%2 === 0}
          />
        ))}
      </ScrollView>
      <FloatButton 
        onPress={() => {
          navigation.navigate('Add-Item');
          // console.log('redirect to add-item screen')
        }} 
      />
    </View>
  )
}

export default List;