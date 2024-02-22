import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import Splash from '../screens/Splash';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='LogIn' component={LogIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      {/* <Stack.Screen
        name='AuthStack'
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AppStack'
        component={AppStack}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  )
};