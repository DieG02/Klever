import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  flatlist: {
    flexGrow: 1,
  },
  list: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default styles;
