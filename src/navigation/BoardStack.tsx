import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DataContext } from '../context/DataContext';
import NavBar from '../components/NavBar/NavBar';
import Boards from '../screens/Boards/Boards';
import List from '../screens/List/List';
import Search from '../screens/Search/Search';
import BoardDetail from '../screens/Boards/BoardDetail';

const Stack = createStackNavigator();

export default function MyStackNavigator() {
  const { name } = useContext<any>(DataContext);

  const config: any = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 2,
      restSpeedThreshold: 0.8,
    }
  };

  const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }: any) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        cardShadowEnabled: false,
        gestureEnabled: true,  // short animation to go Back
        animationTypeForReplace: 'pop',
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: config
        },
        ...horizontalAnimation,
        header: NavBar,
        // headerMode: 'float', // keep the same NavBar, slow to dynamic title
      }}
      initialRouteName='boards'
    >
      <Stack.Screen name='boards' component={Boards} options={{ title: 'Mis listas' }}/>
      <Stack.Screen
        name='list-detail'
        component={List}
        options={({ route }: any): { title: string } => ({
          title: route.params.title
        })}
      />
      <Stack.Screen
        name='search'
        component={Search}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='Detail' component={BoardDetail} options={{ title: name.current }}/>
    </Stack.Navigator>
  )
}




/**
 * 
 *  <Stack.Navigator
      screenOptions={{
        cardShadowEnabled: false,
        gestureEnabled: true,  // short animation to go Back
        animationTypeForReplace: 'pop',
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: config
        },
        ...horizontalAnimation,
        header: NavBar,
        headerMode: 'float', // keep the same NavBar, slow to dynamic title
      }}
      initialRouteName='List'
    >
      <Stack.Screen
        name='List'
        component={List}
        options={({ route }: any): { title: string } => ({
          title: route.params.title
        })}
      />
      <Stack.Screen
        name='Add-Item'
        component={Search}
        options={{ headerShown: false }}
      />
 */