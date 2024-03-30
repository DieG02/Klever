import { StyleSheet } from 'react-native';
import { Colors } from '../global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  news: {
    height: 100,
    borderRadius: 15,
    backgroundColor: Colors.Text,
  },
  content: {
    flex: 1,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  footer: {
    paddingVertical: 20,
    backgroundColor: Colors.White,
  },

  modalContainer: {
    backgroundColor: Colors.Black,
    // flex: 1,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hightlight: {
    color: Colors.Primary,
  },
});

export default styles;
