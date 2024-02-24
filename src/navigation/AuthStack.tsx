import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '../types/Navigation';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

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