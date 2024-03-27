import { StyleSheet } from 'react-native';
import { Colors, Poppins } from '../global';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  footer: {
    backgroundColor: Colors.Background,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontFamily: Poppins.Regular,
    fontSize: 13,
    color: Colors.Dark,
  },
  button: {
    backgroundColor: Colors.Sky,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    margin: 10,
  },
  icon: {
    color: Colors.Primary,
  },
});

export default styles;
