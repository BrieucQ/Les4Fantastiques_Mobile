import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SIGNIN } from './gql/mutations';
import { useMutation } from '@apollo/client';

export default function Login() {
  const [email, setEmail] = useState("Beau2@gmail.com");
  const [password, setPassword] = useState("Password123@");
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
    catch (e) {
      console.error("doSignIn", e);
      // console.error(JSON.stringify(e, null, 4))
    }
    navigation.navigate('Home' as never)
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
          placeholder="Email"
          value={email}
          onChangeText={setEmail} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          textContentType="password"
          onChangeText={setPassword} />
        <TouchableHighlight
          style={styles.button}>
          <Button
            title="Login" onPress={onSubmit} />
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