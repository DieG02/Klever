import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Heading } from './common';
import CollectionBanner from '../assets/app/CollectionBanner';

interface EmptyCollectionProps {}
export default function EmptyCollection({}: EmptyCollectionProps) {
  const [layout, setLayout] = useState({
    update: false,
    margin: 0,
  });

  const handleLayout = (e: any) => {
    if (!layout.update) {
      const layout = e.nativeEvent.layout;
      setLayout({
        update: true,
        margin: (layout.height - 300) / 2,
      });
    }
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={[styles.content, { marginTop: layout.margin }]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 300,
    justifyContent: 'space-between',
  },
  banner: {
    alignItems: 'center',
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
});
