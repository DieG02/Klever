import { AppNavigationProps } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, View } from 'react-native';

import { Colors } from '../styles/global';
import { Parragraph } from './common';

type ItemData = {
  id: string,
  title: string,
  total: number,
  current: number,
  description: string,
  category: string,
  collectionId: string;
};
export default function Card ({ item }: { item: ItemData }) {
  const { id, title, total, current } = item;
  const navigation = useNavigation<AppNavigationProps>();
  const onRedirect = () => {
    navigation.push('Collection', { id, title });
  }

  const getProgress = (current: number, total: number): number => {
    const percent = (current / total) * 100;
    return parseInt(percent.toFixed(0));
  }
  const progress = getProgress(current, total);
  const completed = progress === 100;

  return (
    <Pressable style={[styles.container, completed && styles.containerCompleted]} onPress={onRedirect}>
      <View style={styles.labels}>
        <Parragraph style={{ flex: 1, marginRight: 15 }} numberOfLines={1} ellipsizeMode='tail' weight='semibold' size='lg' color={completed ? 'white' : 'default' }>
          {title}
        </Parragraph>
        <Parragraph weight='medium' size='sm' color={completed ? 'white' : 'default' }>
          {completed ? 'Completed!' : `${current}/${total}`}
        </Parragraph>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: completed ? '0%' : `${progress}%` }]}/>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Light,
    height: 90,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
    elevation: 0.5,
  },
  containerCompleted: {
    backgroundColor: Colors.Primary,
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    height: 6,
    width: '100%',
    borderRadius: 3,
    backgroundColor: Colors.White,
  },
  progress: {
    height: '100%',
    maxWidth: '100%',
    borderRadius: 3,
    backgroundColor: Colors.Primary
  }
});