import 'react-native-gesture-handler';
import React, { useState }from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import Login from './src/components/Login';
import Home from './src/Home';
import Inscription from './src/components/Inscription';
import TicketDetails from './src/components/TicketDetails';

const Drawer = createDrawerNavigator();
const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = AsyncStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  if(isConnected) {
  return (
    <>
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="TicketDetails" component={TicketDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
    </ApolloProvider>
    </>
  );
  } else {
    return (
      <>
      <ApolloProvider client={client}>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Inscription" component={Inscription} />
      </Drawer.Navigator>
    </NavigationContainer>
    </ApolloProvider>
      </>
    )
  }
}
