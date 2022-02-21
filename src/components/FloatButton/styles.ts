import { StyleSheet } from 'react-native';
import { Colors, CustomStyles } from '../../utils/stylers';
const { _center } = CustomStyles;

const styles: any = StyleSheet.create({
  size: {
    backgroundColor: Colors.Main,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 100,
    ..._center,
    elevation: 2,
  }
});

export default styles;