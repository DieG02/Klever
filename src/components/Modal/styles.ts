import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _center } = CustomStyles;

const styles: any = StyleSheet.create({
  container: {
    ..._center,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(50, 50, 50, 0.75)',
    zIndex: 10,
    paddingHorizontal: 20,
  },
  modal: {
    height: 135,
    width: '100%',
    borderRadius: 15,
    backgroundColor: Colors.White,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Grey,
  },

  input: {
    borderBottomColor: Colors.Light,
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: Fonts.Regular,
    paddingBottom: -10,
  },

  button: {
    color: Colors.Main,
    fontFamily: Fonts.Bold,
    fontSize: 18,
  }
});

export default styles;