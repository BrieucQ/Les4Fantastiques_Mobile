import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Inscription () {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = useAuth();

  const onSubmit = async () => {
    await handleSignUp({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    });
    navigation.navigate('Login')
  }

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
        placeholder="Firstname"
        onChange={(e) => setFirstname(e.target.value)} />
        <TextInput 
        style={styles.input}
        placeholder="LastName"
        onChange={(e) => setLastname(e.target.value)} />
        <TextInput 
        style={styles.input}
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}/>
        <TextInput 
        style={styles.input}
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}/>
        <TextInput 
        style={styles.input}
        placeholder="Confirm Password" 
        onChange={(e) => setConfirmPassword(e.target.value)}/>
        <TouchableHighlight 
        style={styles.button}>
        <Button
        title="Inscription" onPress={onSubmit}/>
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