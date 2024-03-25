import { StyleSheet } from 'react-native';
import { Colors } from '../global';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  news: {
    height: 100,
    borderRadius: 15,
    marginBottom: 30,
    backgroundColor: Colors.Dark,
    marginHorizontal: 20,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
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
  }
});

export default styles;