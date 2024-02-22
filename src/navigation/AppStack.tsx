import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Collection from '../screens/Collection';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Collenction' component={Collection} />
    </Stack.Navigator>
  )
};