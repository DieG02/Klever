import { View, StyleSheet } from 'react-native';
import { Heading } from './common';
import CollectionBanner from '../assets/app/CollectionBanner';

interface EmptyCollectionProps {}
export default function EmptyCollection({}: EmptyCollectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <CollectionBanner height={225} width={225} />
      </View>
      <View style={styles.center}>
        <Heading type='Semibold' size={16} color='Placeholder'>
          Oops! Nothing to see here
        </Heading>
        <Heading color='Placeholder' size={12}>
          Add new items with a tap or talk
        </Heading>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  banner: {
    alignItems: 'center',
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
});
