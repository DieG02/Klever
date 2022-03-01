import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _center } = CustomStyles;

const styles: any = StyleSheet.create({
  card: {
    width: '100%',
    height: 55,
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: Colors.Light,
    borderTopWidth: 1,
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
  },

  count: {
    marginRight: 20,
  },
  listItems: {
    width: 30,
    height: 30,
    backgroundColor: Colors.White,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    ..._center,
  },
  listItemsCompleted: {
    width: 30,
    height: 30,
    backgroundColor: Colors.Green,
    borderRadius: 20,
    ..._center,
  },
  itemCount: {
    color: '#CCC',
    fontFamily: Fonts.Regular,
    fontSize: 20,
  },
  itemCountCompleted: {
    color: Colors.White,
    fontFamily: Fonts.Regular,
    fontSize: 20,
  }
});

export default styles;