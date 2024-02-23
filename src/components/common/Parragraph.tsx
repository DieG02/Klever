import { Text, TextProps } from 'react-native';
import { Colors, Poppins } from '../../styles/global';

interface ParragraphProps extends TextProps {
  color?: 'default' | 'white' | 'primary';
  size?: 'sm' | 'base' | 'md';
}

export default function Parragraph({ children, color = 'default', size = 'base', style }: ParragraphProps) {
  const colors = {
    'default': Colors.Dark,
    'white': Colors.White,
    'primary': Colors.Primary,
  }
  const fontSize = {
    'sm': 10,
    'base': 11,
    'md': 12
  }
  return (
    <Text style={[
      { 
        fontFamily: Poppins.Regular, 
        color: colors[color],
        fontSize: fontSize[size],
      }, style
    ]}>
      {children}
    </Text>
  )
};