import { useNavigation, useRoute } from '@react-navigation/native';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import GoogleSvg from '../assets/svg/GoogleSvg';

import { Colors } from '../styles/global';
import { AuthRouteProps, NavigationProps } from '../types/Navigation';
import { Parragraph } from './common';

interface GoogleAuthButtonProps {
  style?: ViewStyle;
}
export default function GoogleAuthButton({ style }: GoogleAuthButtonProps) {
  const navigation = useNavigation<NavigationProps>();
  const onRedirect = () => {
    navigation.navigate('AppStack', { screen: 'Home' });
  } 
  const route = useRoute<AuthRouteProps<'SignUp'>>();
  const label = route.name === 'SignUp'
    ? 'Sign up with Google'
    : 'Continue with Google';

  return (
    <Pressable style={[styles.container, style]} onPress={onRedirect}>
      <GoogleSvg width={24} height={24}/>
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
