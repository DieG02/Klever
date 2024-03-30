import {
  Pressable,
  PressableProps,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Heading from './Heading';
import { Colors } from '../../styles/global';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export default function Button({ children, style, ...props }: ButtonProps) {
  const styles = StyleSheet.compose(
    {
      backgroundColor: Colors.Primary,
      borderRadius: 25,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    style,
  );
  return (
    <TouchableOpacity style={styles} {...props}>
      <Heading color='White' type='Semibold'>
        {children}
      </Heading>
    </TouchableOpacity>
  );
}
