import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { registerUser } from './api'; // Adjust the path as per your project structure


const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const result = await registerUser(username, email, password);
      console.log('Registration successful', result);
  
      // Navigate to the login screen or directly log in the user
      // Replace 'Login' with the name of your login screen or home screen
      navigation.navigate('Login');
    } catch (error) {
      // Handle errors (e.g., display an alert or a message on the screen)
      console.error(error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
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
