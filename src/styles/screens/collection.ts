import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  list: {
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.Gray,
  },
});

export default styles;
