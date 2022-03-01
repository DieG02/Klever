import React, { useContext } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import { ListContext } from '../../context/ItemContext';
import styles from './styles';

const List = () => {
  const { listItems } = useContext<any>(ListContext);
  console.log(listItems);

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
      <FloatButton onPress={() => console.log('List in Detail')} />
    </View>
  )
}

export default List;