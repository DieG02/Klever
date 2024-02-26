import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../styles/global';
import { Parragraph } from './common';
import FacebookSvg from '../assets/svg/FacebookSvg';
import { useRoute } from '@react-navigation/native';
import { AuthRouteProps } from '../types/Navigation';

interface FacebookAuthButtonProps {
  style?: ViewStyle;
}
export default function FacebookAuthButton({ style }: FacebookAuthButtonProps) {
  const route = useRoute<AuthRouteProps<'SignUp'>>();
  const label = route.name === 'SignUp'
    ? 'Sign up with Facebook'
    : 'Continue with Facebook'; 

  return (
    <Pressable style={[styles.container, style]}>
      <FacebookSvg width={24} height={24}/>
      <Parragraph size='md' style={{ marginLeft: 15 }}>
        {label}
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
    flexDirection: 'row',
  },
});
