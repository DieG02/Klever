import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from './common';
import { NavigationProps } from '../types/navigation';
import GoogleSvg from '../assets/svg/GoogleSvg';
import { Colors } from '../styles/global';
import { FirebaseSignUp, AuthWithGoogle } from '../utils/auth';

interface GoogleAuthButtonProps {}
export default function GoogleAuthButton() {
  const navigation = useNavigation<NavigationProps>();

  const handleGoogleAuth = async () => {
    const userCredentials = await AuthWithGoogle();
    const isNewUser = userCredentials?.additionalUserInfo?.isNewUser;
    if (isNewUser) {
      await FirebaseSignUp(userCredentials.user, 'google');
      // TODO: Redirect to complete profile
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'AppStack' }],
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleGoogleAuth}>
      <GoogleSvg width={24} height={24} />
      <Heading color='Placeholder' type='Medium' style={styles.label}>
        Continue with Google
      </Heading>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    borderRadius: 25,
    marginBottom: 15,
    flexDirection: 'row',
  },
  label: {
    marginLeft: 15,
    fontSize: 13,
  },
});
