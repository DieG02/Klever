import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../utils/stylers';

const styles: any = StyleSheet.create({
  view: {
    backgroundColor: Colors.White,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  container: {
    width: '100%',
    backgroundColor: Colors.Blue,
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Red,
  },
  logo: {
    width: 75,
    height: 75,
  },
  title: {
    color: Colors.Black,
    fontFamily: Fonts.Bold,
    fontSize: 18,
    textAlign: 'center'
  },
  
  btnGroup: {
    backgroundColor: Colors.Green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  google: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: Colors.Grey,

  }
})

export default styles;