import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _container, _center } = CustomStyles;

const styles: any = StyleSheet.create({
  view: {
    ..._container,
    backgroundColor: Colors.Light,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 20,
    // backgroundColor: Colors.Blue,
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    height: 110,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: Colors.White,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,

    shadowColor: Colors.Black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    
    elevation: 2.5,
  },
  content: {
    height: '90%',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.Dark,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: Colors.Grey,
  },

  listItems: {
    width: 40,
    height: 40,
    backgroundColor: Colors.White,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.Main,
    ..._center,
  },
  listItemsCompleted: {
    width: 40,
    height: 40,
    backgroundColor: Colors.Green,
    borderRadius: 20,
    ..._center,
  },
  itemCount: {
    color: Colors.Main,
    fontFamily: Fonts.Regular,
    fontSize: 13,
  },
  itemCountCompleted: {
    color: Colors.White,
    fontFamily: Fonts.Regular,
    fontSize: 13,
  }
});

export default styles;