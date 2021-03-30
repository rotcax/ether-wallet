import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@components/widgets'
import { colors, measures } from '@common/styles'

export default class LoadWallet extends Component {
  render() {
    const { walletName, walletDescription } = this.props.route.params

    return (
      <View style={styles.container}>
        <Text style={styles.message}>Load the wallet from</Text>
        <View style={styles.buttonsContainer}>
          <Button
            children="Private key"
            onPress={() => this.props.navigation.navigate('LoadPrivateKey', { walletName, walletDescription })}
          />
          <Button
            children="Mnemonics"
            onPress={() => this.props.navigation.navigate('LoadMnemonics', { walletName, walletDescription })}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultBackground,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
    padding: measures.defaultPadding,
  },
  message: {
    color: colors.black,
    fontSize: 16,
    textAlign: 'center',
    margin: measures.defaultMargin * 4,
  },
  buttonsContainer: {
    justifyContent: 'space-between'
  }
})
