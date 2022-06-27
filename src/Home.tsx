import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Card, Button, Icon } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "./components/Auth/AuthProvider";

export default function Home () {

  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
      <>
      <ScrollView>
    <View style={styles.firstContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.image} 
        source={require('../assets/easy-ticket-logo.jpg')} 
        />
        <Feather style={styles.feather} name="bell" size={18} color="black" />
      </View>
      <View style={styles.welcomeDev}>
        <Text>Welcome Dev</Text>
        </View>
    </View>
    <View style={styles.secondContainer}>
    <Card>
            <Card.Title>PROJET 1</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Ticket 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Ticket 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VOIR PLUS"
              onPress={() => navigation.navigate('TicketDetails' as never)}
            />
          </Card>
          <Card>
            <Card.Title>PROJET 2</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Ticket 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Ticket 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VOIR PLUS"
              onPress={() => navigation.navigate('TicketDetails' as never)}
            />
          </Card>
          <Button buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }} 
              title="Logout"
              onPress={() => {
                signOut()
                navigation.navigate('Login' as never)
              }} />
    </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    firstContainer: {
      flexDirection: "row",
      flex: 0.25,
      justifyContent: "space-between"
    },
  secondContainer: {
    flex: 2,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    margin: 10
  },
  welcomeDev: {
      marginRight: 15,
      alignSelf: "center",
  },
  image: {
      alignSelf: "flex-start",
      justifyContent: 'center',
      height: 50,
      width: 50,
      margin: 5
  },
  feather: {}
});