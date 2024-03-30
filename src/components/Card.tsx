import { AppNavigationProps } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, View } from 'react-native';
import useCollection from '../hooks/useCollection';
import { Colors } from '../styles/global';
import { Heading } from './common';
import { CardModel } from '../types/models';

export default function Card({ item }: { item: CardModel }) {
  const { id, title } = item;
  const collection = useCollection(item.id);
  const { current, total } = collection;
  const navigation = useNavigation<AppNavigationProps>();

  const onRedirect = () => {
    navigation.push('Collection', { id, title });
  };

  const getProgress = (current: number, total: number): number => {
    const percent = (current / total) * 100;
    return parseInt(percent.toFixed(0));
  };
  const progress = getProgress(current!, total!);
  const completed = progress === 100;

  return (
    <Pressable
      style={[styles.container, completed && styles.containerCompleted]}
      onPress={onRedirect}>
      <View style={styles.labels}>
        <Heading
          style={{ marginRight: 15 }}
          numberOfLines={1}
          ellipsizeMode='tail'
          type='Semibold'
          size={13}
          color={completed ? 'White' : 'Text'}>
          {title}
        </Heading>

        <Heading size={10} type='Medium' color={completed ? 'White' : 'Label'}>
          {completed ? 'Completed!' : `${current}/${total}`}
        </Heading>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progress,
            { width: completed || total === 0 ? '0%' : `${progress}%` },
          ]}
        />
      </View>
    </Pressable>
  );
}

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
    backgroundColor: Colors.Primary,
  },
});
