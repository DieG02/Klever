import { StyleSheet } from 'react-native';
import { Colors, CustomStyles } from '../../utils/stylers';
const { _center } = CustomStyles;

const styles: any = StyleSheet.create({
  size: {
    backgroundColor: Colors.Main,
    width: 55,
    height: 55,
    borderRadius: 30,
    position: 'absolute',
    right: 15,
    bottom: 75,
    elevation: 2,
    ..._center,
  }
});

export default styles;