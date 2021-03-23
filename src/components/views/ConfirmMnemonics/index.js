import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { General as GeneralActions, Wallets as WalletsActions } from '../../../common/actions'
import { Wallet as WalletUtils } from '../../../common/utils'
import { colors, measures } from '../../../common/styles'
import { Button } from '../../widgets'
import ConfirmBox from './confirmBox'

export default class ConfirmMnemonics extends Component {
  state = {
    mnemonics: []
  }

  componentDidMount() {
    const { mnemonics, walletName, walletDescription } = this.props.route.params
    this.setState({ mnemonics, walletName, walletDescription })
  }

  async onPressConfirm() {
    if (!this.refs.confirm.isValidSequence()) return

    try {
      const { mnemonics, walletName, walletDescription } = this.state
      const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics)

      await WalletsActions.addWallet(walletName, wallet, walletDescription)
      await WalletsActions.saveWallets()

      this.props.navigation.navigate('WalletsOverview', { replaceRoute: true })

    } catch (e) {
      GeneralActions.notify(e.message, 'long')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View />
        <ConfirmBox ref='confirm' mnemonics={this.state.mnemonics} />
        <View style={styles.buttonsContainer}>
          <Button onPress={() =>this.onPressConfirm()}>Confirm & open wallet</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.defaultBackground,
    padding: measures.defaultPadding
  },
  message: {
    color: colors.black,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: measures.defaultMargin,
    marginHorizontal: 32
  },
  mnemonicsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '80%'
  },
  mnemonic: {
    margin: 4
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    height: 104
  }
})
