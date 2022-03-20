import { StyleSheet } from 'react-native';
import { Colors, CustomStyles, Fonts } from '../../utils/stylers';
const { _container, _center } = CustomStyles;

const styles: any = StyleSheet.create({
  view: {
    height: 50,
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.Light,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: 15,
    color: Colors.Dark,
    paddingLeft: 5,
    paddingRight: 10,
    paddingBottom: 5,
  },
  left: {
    width: 50,
    height: 50,
    ..._center,
  },
  right: {
    paddingRight: 20,
    height: 50,
    ..._center,
  }
});

export default styles;