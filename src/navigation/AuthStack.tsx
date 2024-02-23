import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export type AuthStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='Splash' component={Splash} />
      <AuthStack.Screen name='SignIn' component={SignIn} />
      <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator>
  )
};