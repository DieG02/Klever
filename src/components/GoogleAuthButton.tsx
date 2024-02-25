import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../styles/global';
import { Parragraph } from './common';
import { NavigationProps } from '../types/Navigation';

interface GoogleAuthButtonProps {
  style?: ViewStyle;
}
export default function GoogleAuthButton({ style }: GoogleAuthButtonProps) {
  const navigation = useNavigation<NavigationProps>();
  const onRedirect = () => {
    navigation.navigate('AppStack', { screen: 'Home' });
  } 
  return (
    <Pressable style={[styles.container, style]} onPress={onRedirect}>
      <Parragraph>
        Continue with Google
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
