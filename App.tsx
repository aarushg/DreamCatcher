//App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';
import { DataProvider } from './DataContext';
import DreamCatcher from './DreamCatcher';
import DetailsPage from './DetailsPage';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListPage">
          <Stack.Screen name="DreamCatcher" component={DreamCatcher} />
          <Stack.Screen name="DetailsPage" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
