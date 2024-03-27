import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default styles;
