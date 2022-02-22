import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Login () {

  const navigation = useNavigation();

  return (
    <>
        <View
          style={styles.View}>
        <Image style={styles.image} 
        source={require('../../assets/easy-ticket-logo.jpg')} 
        />
        <TextInput 
        style={styles.input}
        placeholder="Username" />
        <TextInput 
        style={styles.input}
        placeholder="Password" />
        <TouchableHighlight 
        style={styles.button}>
        <Button
        title="Login" onPress={() => navigation.navigate('Home')}/>
        </TouchableHighlight>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  View: {
    justifyContent: 'center',
    backgroundColor: "azure",
    height: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 200,
    margin: 10,
    alignSelf: 'center'
  },
  button: {
    width: 200,
    alignSelf: 'center',
    margin: 10
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})