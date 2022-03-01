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
  label: {
    fontSize: 15,
    fontFamily: Fonts.Medium,
    color: Colors.Grey,
  },
  labelChecked: {
    color: Colors.Dark,
    textDecorationLine: 'line-through',
  },

  count: {
    paddingRight: 10,
    paddingVertical: 10,
    marginRight: 10,
    // backgroundColor: Colors.Black
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: Colors.White,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    ..._center,
  },
  iconChecked: {
    width: 25,
    height: 25,
    backgroundColor: Colors.Green,
    borderRadius: 20,
    ..._center,
  },
});

export default styles;