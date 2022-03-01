import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackBar from '../components/StackBar/StackBar';
import Boards from '../screens/Boards/Boards';
import List from '../screens/List/List';

const Stack = createStackNavigator();

export default function MyStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,  // short animation to go Back
        animationTypeForReplace: 'pop',
        header: StackBar,
        // headerMode: 'float', // keep the same StackBar, slow to dynamic title
      }}
      initialRouteName='Boards'
    >
      <Stack.Screen name='Boards' component={Boards} />
      <Stack.Screen 
        name='List' 
        component={List} 
        options={({ route }: any): any => ({
          title: route.params.title
        })}
      />
    </Stack.Navigator>
  )
}