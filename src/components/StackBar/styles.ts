import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _center } = CustomStyles;


const styles: any = StyleSheet.create({
  header: {
    width: '100%',
    height: 75,
    backgroundColor: Colors.Main,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: Colors.Black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 5,
  },
  menuIcon: {
    backgroundColor: 'transparent',
    padding: 20,
    ..._center,
  },
  title: {
    fontFamily: Fonts.Bold,
    color: Colors.White,
    fontSize: 22,
  }
});

export default styles;