import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackBar from '../components/StackBar/StackBar';
import Boards from '../screens/Boards/Boards';
import List from '../screens/List/List';
import AddItem from '../screens/AddItem/AddItem';

const Stack = createStackNavigator();

export default function MyStackNavigator() {
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
        header: StackBar,
        // headerMode: 'float', // keep the same StackBar, slow to dynamic title
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
        component={AddItem}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}