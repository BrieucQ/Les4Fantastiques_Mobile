import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Card } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import CircularProgress from 'react-native-circular-progress-indicator';
import { gql, useQuery } from "@apollo/client";

export const GETTICKETS = gql`
query($data: TicketFiltersInput!){
  getTickets(data:$data){
      id
      name
      project{
          id
      }
      userTicket{
          role
      }
  }
}
`;

export default function Home () {

  const { data, loading, error } = useQuery(GETTICKETS);

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error.message}</Text>

  const [value, setValue] = useState(0);

  return (
      <>
      <ScrollView>
    <View style={styles.firstContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.image} 
        source={require('../../assets/easy-ticket-logo.jpg')} 
        />
        <Feather style={styles.feather} name="bell" size={18} color="black" />
      </View>
      <View style={styles.welcomeDev}>
        <Text>Welcome Dev</Text>
        </View>
    </View>
    <View style={styles.secondContainer}>
    {data.getTickets.map((ticket) => (
    <Card>
            <Card.Title>{ticket.name}</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              {ticket.description}
            </Text>
            <Card.Divider />
          </Card>
          ))}
          <Card>
            <Card.Title>Commentaires</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Card>
    </View>
    <View style={styles.progressBar}>
      <CircularProgress
        radius={90}
        value={75}
        textColor='#222'
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={2000}
        onAnimationComplete={() => setValue(50)}
      />
      <StatusBar style="auto" />
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
    backgroundColor: "#fff",
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
  progressBar: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feather: {
    
  }
});