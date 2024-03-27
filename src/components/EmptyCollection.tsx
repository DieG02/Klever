import { StyleSheet, Text, View, Dimensions } from 'react-native';
import EmptyCollectionSvg from '../assets/svg/EmptyCollectionSvg';
import { Colors, Poppins } from '../styles/global';

const windowHeight = Dimensions.get('window').height;
const itemHeight = 350;
const top = (windowHeight - itemHeight) / 2;

interface EmptyCollectionProps {}
export default function EmptyCollection({}: EmptyCollectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <EmptyCollectionSvg />
      </View>
      <Text style={styles.label}>Oops! Nothing to see here.</Text>
      <Text style={styles.text}>
        Bring some magic to this empty collection! Add new items with a tap or
        talk!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: top / 2,
    justifyContent: 'center',
    alignItems: 'center',
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
