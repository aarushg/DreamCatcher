import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage'; // Import your LoginPage
import DreamCatcher from './DreamCatcher';
import DetailsPage from './DetailsPage';
// ... import other screens ...

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="DreamCatcher" component={DreamCatcher} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
