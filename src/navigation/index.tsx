import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import MyStackNavigator from './BoardStack';

import Login from '../screens/Login/Login';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


// function MyDrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       drawerType="slide"
//       initialRouteName="MenuTab"
//       // drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen name="MenuTab" component={TabNavigator} />
//     </Drawer.Navigator>
//   );
// }

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

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MainStack' component={MyStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;