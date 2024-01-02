// MainTabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DreamCatcher from './DreamCatcher';
import DetailsPage from './DetailsPage';
// Import other screens needed for tabs

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DreamCatcher" component={DreamCatcher} />
      <Tab.Screen name="DetailsPage" component={DetailsPage} />
      {/* Add other tabs as needed */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
