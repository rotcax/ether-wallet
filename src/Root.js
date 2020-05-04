import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WalletsOverview } from './components/views';
import { HeaderIcon } from './components/widgets';
import { colors } from './common/styles';

const Stack = createStackNavigator();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="WalletsOverview" 
        component={WalletsOverview}
        options={{
          title: 'Overview',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerLeft: () => (
            <HeaderIcon
              name="add"
              size="large"
              color={colors.white}
              onPress={() => console.log('navigate to NewWalletName')}
            />
          ),
          headerRight: () => (
            <HeaderIcon
              name="settings"
              size="medium"
              type="md"
              color={colors.white}
              onPress={() => console.log('navigate to Settings')}
            />
          )
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
