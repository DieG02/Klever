import { StyleSheet } from 'react-native';
import { Colors, Poppins } from '../global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: Colors.Placeholder,
    marginBottom: 25,
  },
  klever: {
    fontFamily: Poppins.Semibold,
    fontSize: 24,
    color: Colors.White,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    color: Colors.White,
  },
  company: {
    fontFamily: Poppins.Semibold,
    textTransform: 'uppercase',
  },
});

export default styles;