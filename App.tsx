// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import DreamCatcher from './DreamCatcher';
import DetailsPage from './DetailsPage';
// ... import other screens ...

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// MainTabNavigator for your main app screens
function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DreamCatcher" component={DreamCatcher} />
      <Tab.Screen name="DetailsPage" component={DetailsPage} />
      {/* Add other main screens to the tab navigator */}
    </Tab.Navigator>
  );
}

// App component with stack navigator
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        {/* Navigates to the MainTabNavigator after login */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
