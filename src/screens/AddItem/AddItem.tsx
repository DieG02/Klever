import React, { useState, useContext, useEffect, useMemo } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultItem from '../../components/ResultItem/ResultItem';
import { DataContext } from '../../context/DataContext';
import useZustand from '../../store/store';
import { Colors } from '../../utils/stylers';
import styles from './styles';


const AddItems = () => {
  const { name } = useContext<any>(DataContext);
  const [data, setData] = useState<any[]>([]);
  const [value, setValue] = useState<string>('');
  const { boards, allItems } = useZustand();
  const { items } = boards.filter((list: any) => list.title === name.current)[0];


  const addTopItem = (current: string) => {
    setValue(current);
    if (!current) {
      setData(data.slice(1))
    }
    if (allItems.length === data.length && current) {
      setData([{ name: current, selected: false }, ...data])
    } else {
      setData(data.map((element, index) => {
        if (index === 0) return { name: current, selected: false };
        else return element;
      }))
    }
  }


  useEffect(() => {
    const sorted = allItems.sort((a, b) => (a.name > b.name) ? 1 : -1);
    const array = sorted.map((element, index) => ({ ...element, id: index }))
    setData(
      array.map((element) => {
        if (items.includes(element.name)) return { ...element, selected: true };
        return element;
      })
    );
  }, [])

  console.log(data);
  
  return(
    <View>
      <View style={{ backgroundColor: 'white' }}>
        <SearchBar
          value={value}
          setValue={addTopItem}
        />
        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ResultItem
                name={item.name}
                selected={item.selected}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.Light }} />
            )}
            extraData={data}
          />
        </View>
      </View>
    </View>
  )
}

export default AddItems;