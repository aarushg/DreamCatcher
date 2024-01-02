import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { registerUser } from './api'; // Adjust the path as per your project structure

// Define the type for your navigation stack parameters
type RootStackParamList = {
  Login: undefined; // Add other screen names as keys here
  Register: undefined;
  // Add other screens you have in your stack here
};

// Define the props type for RegisterPage
type RegisterPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterPage: React.FC<RegisterPageProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const result = await registerUser(username, email, password);
      console.log('Registration successful', result);

      // Navigate to the login screen or directly log in the user
      navigation.navigate('Login');
    } catch (error) {
      console.error(error.message); // Handle errors
    }
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(
      TextInput,
      {
        style: styles.input,
        placeholder: "Username",
        value: username,
        onChangeText: setUsername,
      }
    ),
    React.createElement(
      TextInput,
      {
        style: styles.input,
        placeholder: "Email",
        value: email,
        onChangeText: setEmail,
      }
    ),
    React.createElement(
      TextInput,
      {
        style: styles.input,
        placeholder: "Password",
        value: password,
        onChangeText: setPassword,
        secureTextEntry: true,
      }
    ),
    React.createElement(
      Button,
      { title: "Register", onPress: handleRegister }
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default RegisterPage;
