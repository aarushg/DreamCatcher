// LoginPage.ts

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Define the props for the LoginPage component
interface LoginPageProps {
  navigation: NavigationProp<any>;
}

// Define the LoginPage component
const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define the login handler
  const handleLogin = () => {
    // Dummy login: always succeed
    const dummyResponse = {
      success: true,
      message: 'Login successful',
    };

    if (dummyResponse.success) {
      // If login is successful, navigate to the 'MainTabs' screen
      navigation.navigate('MainTabs');
    } else {
      // If login fails, log the error message
      console.error('Login failed:', dummyResponse.message);
    }
  };

  // Define the register handler
  const handleRegister = () => {
    // Navigate to the RegisterPage
    navigation.navigate('RegisterPage');
  };

  // Render the LoginPage component
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
        placeholder: "Password",
        value: password,
        onChangeText: setPassword,
        secureTextEntry: true,
      }
    ),
    React.createElement(
      Button,
      { title: "Login", onPress: handleLogin }
    ),
    React.createElement(
      Button,
      { title: "Register", onPress: handleRegister }
    )
  );
};

// Define the styles for the LoginPage component
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

// Export the LoginPage component
export default LoginPage;
