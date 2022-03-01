import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _center } = CustomStyles;

const styles: any = StyleSheet.create({
  card: {
    width: '100%',
    height: 105,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: Colors.White,
    display: 'flex',
    position: 'relative',
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

    elevation: 2,
  },
  content: {
    height: '90%',
    flex: 1,
    justifyContent: 'space-around',
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.Dark,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: Colors.Grey,
    flexWrap: 'wrap',
  },

  count: {
    width: 55,
    alignItems: 'flex-end',
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