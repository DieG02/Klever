import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  scopes: [
    // 'https://www.googleapis.com/auth/user.birthday.read',
    // 'https://www.googleapis.com/auth/user.gender.read',
    // 'https://www.googleapis.com/auth/user.addresses.read',
  ],
  webClientId: Config.WEB_CLIENT_ID,
  offlineAccess: true,
});

export default GoogleSignin;
