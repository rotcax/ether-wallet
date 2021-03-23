import React from 'react'
import Root from './Root'
import * as stores from './common/stores'
import { StatusBar, StyleSheet, View } from 'react-native'
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'mobx-react'
import { colors } from './common/styles'

const STATUSBAR_CONFIG = {
  backgroundColor: colors.statusBar,
  barStyle: 'light-content',
  translucent: false
}

const Main = () => (
  <Provider {...stores}>
    <RootSiblingParent>
      <View style={styles.container}>
        <StatusBar {...STATUSBAR_CONFIG}/>
        <Root/>
      </View>
    </RootSiblingParent>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultBackground,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

export default Main
