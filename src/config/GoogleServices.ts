import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';

GoogleSignin.configure({
  scopes: [
    // 'https://www.googleapis.com/auth/user.birthday.read',
    // 'https://www.googleapis.com/auth/user.gender.read',
    // 'https://www.googleapis.com/auth/user.addresses.read',
  ],
  webClientId: WEB_CLIENT_ID,
  offlineAccess: true,
});

export default GoogleSignin;