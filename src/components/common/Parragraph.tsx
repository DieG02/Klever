import { Text, TextProps } from 'react-native';
import { Colors, Poppins } from '../../styles/global';

interface ParragraphProps extends TextProps {
  color?: 'default' | 'white' | 'primary';
  size?: 'sm' | 'base' | 'md' | 'lg';
  weight?: 'regular' | 'medium' | 'semibold';
}

export default function Parragraph(props: ParragraphProps) {
  const { children, color = 'default', size = 'base', weight = 'regular', style, ...otherProps} = props;
  const colors = {
    'default': Colors.Dark,
    'white': Colors.White,
    'primary': Colors.Primary,
  };
  const fontSize = {
    'sm': 10,
    'base': 11,
    'md': 12,
    'lg': 13,
  };
  const fontFamily = {
    'regular': Poppins.Regular,
    'medium': Poppins.Medium,
    'semibold': Poppins.Semibold,
  };
  return (
    <Text style={[
      { 
        fontFamily: fontFamily[weight], 
        color: colors[color],
        fontSize: fontSize[size],
      }, style
    ]} {...otherProps}>
      {children}
    </Text>
  )
};