import { StyleSheet } from 'react-native';
import { Colors, CustomStyles } from '../../utils/stylers';
const { _container } = CustomStyles;

const styles: any = StyleSheet.create({
  view: {
    height: '100%',
  },
  content: {
    ..._container,
    padding: 20,
    backgroundColor: Colors.White,
  },
});

export default styles;