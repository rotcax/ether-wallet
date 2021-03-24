import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderIcon } from './components/widgets'
import { colors } from './common/styles'
import {
  WalletsOverview,
  NewWalletName,
  Settings,
  ChangeCurrency,
  NewWallet,
  CreateMnemonics,
  SendCoins,
  CreateWallet,
  ConfirmMnemonics
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
      <Stack.Screen name="WalletsOverview" component={WalletsOverview} options={WalletsOverviewOptions} />
      <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
      <Stack.Screen name="ChangeCurrency" component={ChangeCurrency} options={{ title: 'Select currency' }} />
      <Stack.Screen name="NewWalletName" component={NewWalletName} options={{ title: 'New Wallet Name' }} />
      <Stack.Screen name="NewWallet" component={NewWallet} options={{ title: 'New Wallet' }} />
      <Stack.Screen name="CreateWallet" component={CreateWallet} options={{ title: 'Create Wallet' }} />
      <Stack.Screen name="CreateMnemonics" component={CreateMnemonics} options={{ title: 'Create Mnemonics' }} />
      <Stack.Screen name="ConfirmMnemonics" component={ConfirmMnemonics} options={{ title: 'Confirm Mnemonics' }} />
      <Stack.Screen name="SendCoins" component={SendCoins} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Root
