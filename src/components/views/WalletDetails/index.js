import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@components/widgets'
import { colors } from '@common/styles'
import ReceiveCoins from '../ReceiveCoins'
import SendCoins from '../SendCoins'
import WalletExtract from '../WalletExtract'
import WalletSettings from '../WalletSettings'

const Tab = createBottomTabNavigator()

const screenOptions = ({ route: { name } }) => ({
  tabBarIcon: ({ focused }) => {
    let icon = {
      name: '',
      type: ''
    }

    if (name === 'Settings') icon.name = 'settings'
    if (name === 'Send') icon = { name: 'cube-send', type: 'mdc' }
    if (name === 'Extract') icon.name = 'list'
    if (name === 'Receive') icon = { name: 'qrcode', type: 'fa' }

    return <Icon color={focused ? colors.black : colors.gray} type={icon.type} name={icon.name} />
  }
})

const WalletDetails = () => (
  <Tab.Navigator
    screenOptions={screenOptions}
    tabBarOptions={{
      activeTintColor: colors.black,
      inactiveTintColor: colors.gray,
    }}
  >
    <Tab.Screen name="Extract" component={WalletExtract} />
    <Tab.Screen name="Receive" component={ReceiveCoins} />
    <Tab.Screen name="Send" component={SendCoins} />
    <Tab.Screen name="Settings" component={WalletSettings} />
  </Tab.Navigator>
)

export default WalletDetails
