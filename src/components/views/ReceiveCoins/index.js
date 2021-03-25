import React, { Component } from 'react'
import { Clipboard, Share, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Icon } from '@components/widgets'
import { General as GeneralActions } from '@common/actions'
import { colors, measures } from '@common/styles'
import QRCode from 'react-native-qrcode-svg'

@inject('wallet')
@observer
export default class ReceiveCoins extends Component {
  state = {
    walletAddress: ''
  }

  async componentDidMount() {
    const { item } = this.props.wallet
    const walletAddress = await item.getAddress()

    this.setState({ walletAddress })
  }

  copyToClipboard() {
    const { walletAddress } = this.state

    Clipboard.setString(walletAddress)
    GeneralActions.notify('Copied to clipboard', 'short')
  }

  share() {
    const { walletAddress } = this.state

    Share.share({
      title: 'Wallet address:',
      message: walletAddress
    })
  }

  renderColumn = (icon, label, action) => (
    <TouchableWithoutFeedback onPress={action}>
      <View style={styles.actionColumn}>
        <Icon name={icon} style={styles.actionIcon} />
        <Text style={styles.actionLabel}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  render() {
    const { walletAddress } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.centered}>Show the code below to receive coins</Text>
        <View style={styles.centered}>
          <QRCode size={256} value={walletAddress ? walletAddress : 'test'} />
        </View>
        <Text style={styles.centered}>{walletAddress}</Text>
        <View style={styles.actions}>
          <View style={styles.actionsBar}>
            {this.renderColumn('copy', 'Copy', () => this.copyToClipboard())}
            {this.renderColumn('share', 'Share', () => this.share())}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    padding: measures.defaultPadding
  },
  actions: {
    height: 56
  },
  actionsBar: {
    flexDirection: 'row',
    flex: 3
  },
  actionColumn: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centered: {
    alignSelf: 'center'
  }
})
