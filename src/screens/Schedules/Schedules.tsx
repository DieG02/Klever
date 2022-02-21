import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import styles from './styles';
// import { ScrollView } from 'react-native-gesture-handler';

const Schedules = () => {
  return(
    <View style={styles.view}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
        <ScheduleItem />
        <ScheduleItem completed/>
      </ScrollView>
      <FloatButton onPress={() => console.log('Add schedule')} />
    </View>
  )
}

export default Schedules;