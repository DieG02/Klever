import { StyleSheet } from 'react-native';
import { Colors, Poppins } from '../global';

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: Colors.Light,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontFamily: Poppins.Regular,
    fontSize: 14,
    color: Colors.Dark,
  },
  button: {
    backgroundColor: Colors.Primary,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    margin: 10,
  },
});

export default styles;