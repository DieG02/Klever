import { RootStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='AuthStack'
        component={AuthStack}
        options={{ headerShown: false }}/>
      <RootStack.Screen
        name='AppStack'
        component={AppStack}
        options={{ headerShown: false }}/>
    </RootStack.Navigator>
  )
};