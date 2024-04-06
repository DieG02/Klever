import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import HomeBanner from '../assets/app/HomeBanner';
import { Heading } from './common';

interface EmptyCardsProps {}
export default function EmptyCards({}: EmptyCardsProps) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'height'}>
      <View style={styles.inner}>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    alignItems: 'center',
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
});
