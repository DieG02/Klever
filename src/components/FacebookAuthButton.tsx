import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Parragraph } from './common';
import { Colors } from '../styles/global';

interface FacebookAuthButtonProps {
  style?: ViewStyle;
}
export default function FacebookAuthButton({ style }: FacebookAuthButtonProps) {
  return (
    <Pressable style={[styles.container, style]}>
      <Parragraph>
        Continue with Facebook
      </Parragraph>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    borderRadius: 25,
    marginBottom: 15,
  },
})
