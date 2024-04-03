import { View, StyleSheet } from 'react-native';
import HomeBanner from '../assets/app/HomeBanner';
import { Heading } from './common';

interface EmptyCardsProps {}
export default function EmptyCards({}: EmptyCardsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <HomeBanner height={225} width={225} />
      </View>
      <View style={styles.center}>
        <Heading type='Semibold' size={16} color='Placeholder'>
          Hmm, looks like it's empty
        </Heading>
        <Heading color='Placeholder' size={12}>
          Add new collections in the section below!
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
