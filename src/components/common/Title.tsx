import { Text, TextProps } from 'react-native';
import { Colors, Poppins } from '../../styles/global';

interface TitleProps extends TextProps {
  color?: 'default' | 'white' | 'primary';
}

export default function Title({ children, color = 'default', style }: TitleProps) {
  const colors = {
    'default': Colors.Dark,
    'white': Colors.White,
    'primary': Colors.Primary,
  }
  return (
    <Text style={[
      { 
        fontFamily: Poppins.Semibold, 
        color: colors[color],
        fontSize: 16,
      }, style
    ]}>
      {children}
    </Text>
  )
};