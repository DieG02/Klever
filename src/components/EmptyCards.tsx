import { StyleSheet, Text, View } from 'react-native';
import EmptyCardsSvg from '../assets/svg/EmptyCardsSvg';
import { Colors, Poppins } from '../styles/global';

interface EmptyCardsProps {}
export default function EmptyCards({}: EmptyCardsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <EmptyCardsSvg />
      </View>
      <Text style={styles.label}>Hmm, looks like it's empty.</Text>
      <Text style={styles.text}>
        Ready to add new cards? Just type their names in the section below!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  svg: {
    height: 300,
    width: 300,
  },
  label: {
    color: Colors.Text,
    fontFamily: Poppins.Semibold,
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: Poppins.Regular,
    marginTop: 6,
    paddingHorizontal: 16,
  },
});
