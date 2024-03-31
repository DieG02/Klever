import { StyleSheet, Text, View } from 'react-native';
import EmptyCardsSvg from '../assets/svg/EmptyCardsSvg';
import HomeBanner from '../assets/app/HomeBanner';
import { Colors, Poppins } from '../styles/global';
import { Heading } from './common';
import { useState } from 'react';

interface EmptyCardsProps {}
export default function EmptyCards({}: EmptyCardsProps) {
  const [layout, setLayout] = useState({
    update: false,
    margin: 0,
  });

  const handleLayout = (e: any) => {
    if (!layout.update) {
      const layout = e.nativeEvent.layout;
      console.log(layout);
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
