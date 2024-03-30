import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Heading from './Heading';
import { Colors } from '../../styles/global';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export default function Button({ children, style, ...props }: ButtonProps) {
  const styles = StyleSheet.compose(
    {
      backgroundColor: Colors.Primary,
      borderRadius: 25,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
    },
    style,
  );
  return (
    <Pressable
      style={({ pressed }) => [styles, pressed && { elevation: 0 }]}
      {...props}>
      <Heading color='White' type='Semibold'>
        {children}
      </Heading>
    </Pressable>
  );
}
