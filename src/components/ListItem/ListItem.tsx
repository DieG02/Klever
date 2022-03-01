import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CheckSvg from '../../assets/icons/Check.svg';
import { Colors } from '../../utils/stylers';
import styles from './styles';

const ListItem = ({ label, checked }: { label: string, checked: boolean }) => {
  const [isChecked, setCheck] = useState<boolean>(checked);
  
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.count}
        onPress={() => setCheck(!isChecked)}
      >
        {isChecked ? (
          <View style={styles.iconChecked}>
            <CheckSvg color={Colors.White} width={13}/>
          </View>
        ) : (
          <View style={styles.icon}>
            <CheckSvg color='#CCC' width={13} />
          </View>
        )}
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={[styles.label, isChecked && styles.labelChecked]}>
          {label}
        </Text>
      </View>
    </View>
  )
}

export default ListItem;