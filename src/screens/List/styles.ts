import { StyleSheet } from 'react-native';
import { Colors, CustomStyles } from '../../utils/stylers';
const { _container } = CustomStyles;

const styles: any = StyleSheet.create({
  view: {
    ..._container,
    backgroundColor: Colors.White,
  },
  cardContainer: {
    width: '100%',
    padding: 15,
    display: 'flex',
  },
});

export default styles;