import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DataContext } from '../context/DataContext';
import BoardDetail from '../screens/Boards/BoardDetail';
import BoardStack from '../navigation/BoardStack';
import NavBar from '../components/NavBar/NavBar';
const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator
      initialRouteName='Board-Stack'
      screenOptions={{
        header: NavBar,
        // headerShown: false
      }}
    >
      <Drawer.Screen name='Board-Stack' component={BoardStack} options={{ headerShown: false }}/>
      <Drawer.Screen name='boardDetail' component={BoardDetail} />
    </Drawer.Navigator>
  )
}