import { StyleSheet } from 'react-native';
import { Colors, Poppins } from '../global';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 13,
    color: Colors.Text,
    fontFamily: Poppins.Regular,
    borderRadius: 20,
    height: 40,
    backgroundColor: Colors.Background,
    marginRight: 5,
  },
  button: {
    backgroundColor: Colors.Light,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  icon: {
    color: Colors.Primary,
  },
});

export default styles;
