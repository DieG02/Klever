import { StyleSheet } from 'react-native';

type Bold = 'Poppins-Bold';
type SemiBold = 'Poppins-SemiBold';
type Medium = 'Poppins-Medium';
type Regular = 'Poppins-Regular';

interface IFonts {
  Bold: Bold,
  SemiBold: SemiBold,
  Medium: Medium,
  Regular: Regular 
}

export const Fonts: IFonts = {
  Bold: 'Poppins-Bold',
  SemiBold: 'Poppins-SemiBold',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
}

export const Colors = {
  // Main: '#5C18ED',
  // Main: '#4E1EEB',
  Main: '#4E42EB',
  Blue: '#0384FC',
  Green: '#17BD33',
  Yellow: '#F8E224',
  Red: '#F0362A',
  White: '#FEFEFE',
  Light: '#EAEAEA',
  Grey: '#666666',
  Dark: '#333333',
  Black: '#252525',
} 

export const CustomStyles = StyleSheet.create({
  _container: {
    display: 'flex',
    backgroundColor: Colors.White,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _bold: {
    fontFamily: Fonts.SemiBold
  },
  _black: {
    color: Colors.Black,
  },
  _white: {
    color: Colors.White,
  },
  _main: {
    color: Colors.Main
  },
})