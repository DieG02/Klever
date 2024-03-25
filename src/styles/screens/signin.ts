import { StyleSheet } from 'react-native';
import { Colors, Poppins } from '../global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
  },
  brand: {
    alignItems: 'center',
    marginVertical: 24,
  },
  klever: {
    fontFamily: Poppins.Semibold,
    fontSize: 24,
    color: Colors.Primary,
  },
  title: {
    marginBottom: 8,
  },
  svg: { 
    height: 350,
    width: 350,
    marginVertical: 8,
  },
  center: {
    textAlign: 'center'
  },
});

export default styles;