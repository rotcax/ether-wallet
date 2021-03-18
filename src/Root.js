import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderIcon } from './components/widgets'
import { colors } from './common/styles'
import {
  WalletsOverview,
  NewWalletName,
  Settings,
  ChangeCurrency
} from './components/views'

const Stack = createStackNavigator()

const screensOptions = {
  headerTintColor: colors.secondary,
  headerStyle: { backgroundColor: colors.primary },
  tintColor: colors.secondary
}

const WalletsOverviewOptions = ({ navigation }) => ({
  title: 'Overview',
  headerLeft: () => (
    <HeaderIcon
      name="add"
      size="large"
      color={colors.white}
      onPress={() => navigation.navigate('NewWalletName')}
    />
  ),
  headerRight: () => (
    <HeaderIcon
      name="settings"
      size="medium"
      type="md"
      color={colors.white}
      onPress={() => navigation.navigate('Settings')}
    />
  )
})

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screensOptions} initialRouteName="WalletsOverview">
      <Stack.Screen name="NewWalletName" component={NewWalletName} options={{ title: 'New Wallet Name' }} />
      <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
      <Stack.Screen name="ChangeCurrency" component={ChangeCurrency} options={{ title: 'Select currency' }} />
      <Stack.Screen name="WalletsOverview" component={WalletsOverview} options={WalletsOverviewOptions} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Root
