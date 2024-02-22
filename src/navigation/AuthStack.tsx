import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='LogIn' component={LogIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
};