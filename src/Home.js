import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


export default function Home () {

  return (
      <>
    <View style={styles.firstContainer}>
    <Image style={styles.image} 
        source={require('../assets/easy-ticket-logo.jpg')} 
        />
        <Text style={styles.welcomeDev}>Welcome Dev</Text>
        </View>
        <View style={styles.secondContainer}>
      <Text>Details screen</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    firstContainer: {
        flex: 0.2,
        justifyContent: "center",
    },
  secondContainer: {
    flex: 2,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeDev: {
      alignSelf: "flex-end",
      marginRight: 15
  },
  image: {
      alignSelf: "flex-start",
      justifyContent: 'center',
      position: "absolute",
      height: 50,
      width: 50,
      margin: 5
  }
});