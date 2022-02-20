import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const Schedule = ({ completed }: {completed?: boolean }) => {
  return (
  <TouchableOpacity style={styles.card}>
    <View style={styles.content}>
      <Text style={styles.title}>
        Title Card
      </Text>
      <Text style={styles.description}>
        Tomate, lechuga, leche, naranja
      </Text>
    </View>
    
      {completed ? (
        <View style={styles.listItemsCompleted}>
          <Text style={styles.itemCountCompleted}>
            12/12
          </Text>
        </View>
      ) : (
        <View style={styles.listItems}>
          <Text style={styles.itemCount}>
            12/12
          </Text>
        </View>
      )}
  </TouchableOpacity>
  )
}

export default Schedule;