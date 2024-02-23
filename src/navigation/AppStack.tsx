import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Collection from '../screens/Collection';

export type AppStackParamList = {
  Home: undefined;
  Collection: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name='Home' component={Home} />
      <AppStack.Screen name='Collection' component={Collection} />
    </AppStack.Navigator>
  )
};