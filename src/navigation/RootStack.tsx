import { RootStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../components/common/LoadingScreen';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../hooks/useAuth';

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <RootStack.Screen name='AuthStack' component={AuthStack} />
      ) : (
        <RootStack.Screen name='AppStack' component={AppStack} />
      )}
    </RootStack.Navigator>
  );
}
