import 'react-native-gesture-handler';
import React, { useState }from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login';
import Home from './src/Home';
import Inscription from './src/components/Inscription';
import TicketDetails from './src/components/TicketDetails';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  if(isConnected) {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="TicketDetails" component={TicketDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
  } else {
    return (
      <>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Inscription" component={Inscription} />
      </Drawer.Navigator>
    </NavigationContainer>
      </>
    )
  }
}
