import { AppStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { ChevronLeftIcon as ChevronLeftIconMini } from 'react-native-heroicons/mini';

import Home from '../screens/Home';
import Collection from '../screens/Collection';
import Settings from '../screens/Settings';
import { Colors, Poppins } from '../styles/global';
import { useTranslation } from 'react-i18next';

const AppStack = createStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  const { t } = useTranslation();
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
      <AppStack.Screen
        name='Settings'
        component={Settings}
        options={({ route }) => ({
          title: t('app.settings'),
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
