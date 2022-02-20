import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login/Login';
import Schedules from '../screens/Schedules/Schedules';

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

function MyStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Login'
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Schedules' component={Schedules} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name='MainStack' component={MyStackNavigator} />
        {/* <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Schedules' component={Schedules} /> */}
        {/* <Stack.Screen name='MyTabBar' component={MyTabBar} />
        <Stack.Screen name='Song' component={Song} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;