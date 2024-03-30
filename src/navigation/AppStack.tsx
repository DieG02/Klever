import { AppStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { ChevronLeftIcon as ChevronLeftIconMini } from 'react-native-heroicons/mini';

import Collection from '../screens/Collection';
import Home from '../screens/Home';
import { Colors, Poppins } from '../styles/global';

const AppStack = createStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name='Collection'
        component={Collection}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: Colors.White,
            elevation: 0,
          },
          headerTintColor: Colors.Black,
          headerTitleStyle: {
            fontFamily: Poppins.Semibold,
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerBackImage: () => <ChevronLeftIconMini color={Colors.Black} />,
        })}
      />
    </AppStack.Navigator>
  );
}
