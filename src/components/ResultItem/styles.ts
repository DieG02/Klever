import { StyleSheet } from 'react-native';
import { Colors, CustomStyles, Fonts } from '../../utils/stylers';
const { _container, _center } = CustomStyles;

const styles: any = StyleSheet.create({
  item: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 14,
  },
  selected: {
    fontFamily: Fonts.SemiBold,
    color: Colors.Black,
  },
  none: {
    fontFamily: Fonts.Regular,
    color: Colors.Grey,
  },
  icon: {
    height: '100%',
    width: 20,
    ..._center,
  }
})

export default styles;