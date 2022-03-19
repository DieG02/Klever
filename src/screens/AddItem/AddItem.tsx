import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultItem from '../../components/ResultItem/ResultItem';
import styles from './styles';
import { Colors } from '../../utils/stylers';

const DATA: any[] = [
  { name: 'leche', selected: true, id: '0001' },
  { name: 'pan', selected: true, id: '0010' },
  { name: 'aceite', selected: true, id: '0011' },
  { name: 'café', selected: true, id: '0100' },
  { name: 'tomate', selected: false, id: '0101' },
  { name: 'lechuga', selected: false, id: '0110' },
  { name: 'zanahoria', selected: false, id: '0111' },
  { name: 'cebolla', selected: false, id: '1000' },
  { name: 'zapallo', selected: false, id: '1001' },
  { name: 'frijoles', selected: false, id: '1010' },
]

const AddItems = () => {

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
            data={DATA}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </View>
    </View>
  )
}

export default AddItems;