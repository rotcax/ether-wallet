import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WalletsOverview } from './components/views';

import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="WalletsOverview" 
        component={WalletsOverview}
        options={{
          title: 'Overview',
          headerLeft: () => {},
          headerRight: () => {}
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
