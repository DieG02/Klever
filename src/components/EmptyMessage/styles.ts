import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _container } = CustomStyles;

const styles: any = StyleSheet.create({
  container: {
    ..._container,
    backgroundColor: 'transparent',
  },
  message: {
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
    color: Colors.Grey,
  }
});

export default styles;