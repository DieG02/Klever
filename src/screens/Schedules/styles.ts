import { StyleSheet } from 'react-native';
import { Colors, CustomStyles } from '../../utils/stylers';
const { _container } = CustomStyles;

const styles: any = StyleSheet.create({
  view: {
    ..._container,
    backgroundColor: Colors.Light,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.Light,
    display: 'flex',
  }
});

export default styles;