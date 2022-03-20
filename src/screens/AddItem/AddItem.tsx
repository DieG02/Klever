import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultItem from '../../components/ResultItem/ResultItem';
import { DataContext } from '../../context/DataContext';
import useZustand from '../../store/store';
import { Colors } from '../../utils/stylers';
import styles from './styles';

const INITIAL_DATA: any[] = [
  { name: 'leche', selected: false, id: '0001' },
  { name: 'pan', selected: false, id: '0010' },
  { name: 'aceite', selected: false, id: '0011' },
  { name: 'café', selected: false, id: '0100' },
  { name: 'tomate', selected: false, id: '0101' },
  { name: 'lechuga', selected: false, id: '0110' },
  { name: 'zanahoria', selected: false, id: '0111' },
  { name: 'cebolla', selected: false, id: '1000' },
  { name: 'zapallo', selected: false, id: '1001' },
  { name: 'frijoles', selected: false, id: '1010' },
]

const AddItems = () => {
  const store = useZustand();
  const { name } = useContext<any>(DataContext);
  const getList = () => {
    return store.boards.filter((list: any) => list.title === name.current)[0];
  }
  const { items } = getList();
  const data = INITIAL_DATA.map((element) => {
    if (items.includes(element.name)) {
      return {
        ...element,
        selected: true,
      }
    }
    return element;
  })
  
  const RenderItem = ({ item }: { item: {name: string, selected: boolean, id: string} }) => (
    <ResultItem
      name={item.name}
      selected={item.selected}
    />
  );
  const Separator = () => {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.Light}}/>
    )
  }

  return(
    <View>
      <View style={{ backgroundColor: 'white' }}>
        <SearchBar />
        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            extraData={data}
          />
        </View>
      </View>
    </View>
  )
}

export default AddItems;