import { StyleSheet } from 'react-native';
import { Fonts, Colors, CustomStyles } from '../../utils/stylers';
const { _container, _center } = CustomStyles;

const styles: any = StyleSheet.create({
  view: {
    ..._container,
    alignItems: 'flex-start',
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
    paddingHorizontal: 20,
    height: '78%',
    marginTop: 'auto',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  header: {
    ..._center,
  },
  imageContainer: {
    width: 81,
    height: 81,
    marginBottom: 20,
    position: 'relative',
    borderRadius: 40,
    elevation: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: Colors.Black,
    fontFamily: Fonts.Bold,
    fontSize: 19,
    textAlign: 'center'
  },
  
  btnGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 160,
  },
  btnRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 25,
  },
  google: {
    backgroundColor: '#EEEEEE',
  },
  facebook: {
    // backgroundColor: '#1877F2',
    backgroundColor: '#2c82f2',
  },
  guest: {
    height: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },  

  footer: {
    width: '100%',
  },
  termsAndConditions: {
    fontFamily: Fonts.Regular,
    textAlign: 'center',
    color: '#AAA',
    fontSize: 13,
  },
  underline: {
    textDecorationLine: 'underline'
  }
})

export default styles;