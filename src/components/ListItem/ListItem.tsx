import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const ListItem = ({ label, checked }: { label: string, checked: boolean }) => {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log('Do something')}
    >
      <View style={styles.content}>
        <Text style={styles.description}>
          {label}
        </Text>
      </View>

      <View style={styles.count}>
        {checked ? (
          <View style={styles.listItemsCompleted}>
            <Text style={styles.itemCountCompleted}>
              ♪
            </Text>
          </View>
        ) : (
          <View style={styles.listItems}>
            <Text style={styles.itemCount}>
                ♪
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default ListItem;