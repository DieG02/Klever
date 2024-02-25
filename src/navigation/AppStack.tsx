import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamList } from '../types/Navigation';
import Home from '../screens/Home';
import Collection from '../screens/Collection';

const AppStack = createStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
      <AppStack.Screen name='Collection' component={Collection} />
    </AppStack.Navigator>
  )
};