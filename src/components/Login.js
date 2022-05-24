import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIGNIN } from './gql/mutations';
import { useMutation } from '@apollo/client';

export default function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doSignIn] = useMutation(SIGNIN);

  const onSubmit = async () => {
    try {
    const res = await doSignIn({
      variables: {
        email: email,
        password: password
      }
    });
    if (res.data.signin) {
      await AsyncStorage.setItem("token", res.data.signin);
    }
  }
  catch(err) {
    console.error("Problème de serveur")
  }


    navigation.navigate('Home')
  };

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
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <TextInput 
        style={styles.input}
        placeholder="Password"
        value={password}
        textContentType="password"
        onChange={(e) => setPassword(e.target.value)} />
        <TouchableHighlight 
        style={styles.button}>
        <Button
        title="Login" onPress={onSubmit}/>
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