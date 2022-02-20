import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Schedule from './Schedule';
import styles from './styles';

const Schedules = () => {
  return(
    <View style={styles.view}>
      <View style={styles.cardContainer}>
        <Schedule />
        <Schedule completed/>
      </View>
      <Text>
        VIEW SCHEDULES
      </Text>
    </View>
  )
}

export default Schedules;