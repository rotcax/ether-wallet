import React, { Component } from 'react'
import { General as GeneralActions, Wallets as WalletActions, Prices as PricesActions } from '../../../common/actions'
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native'
import { inject, observer } from 'mobx-react'
import { measures } from '@common/styles'
import WalletCard from './WalletCard'
import NoWallets from './NoWallets'
import TotalBalance from './TotalBalance'

@inject('prices', 'wallets')
@observer
export default class WalletsOverview extends Component {
  get loading() {
    return this.props.prices.loading || this.props.wallets.loading
  }

  componentDidMount() {
    this.populate()
  }

  async populate() {
    try {
      await Promise.all([
        WalletActions.loadWallets(),
        PricesActions.getPrice()
      ])
    } catch(e) {
      GeneralActions.notify(e.message, 'long')
    }
  }

  onPressWallet(wallet) {
    if(this.loading) return
    WalletActions.selectWallet(wallet)
    // this.props.navigation.navigate('WalletDetails', { wallet })
    this.props.navigation.navigate('WalletDetails', {
      wallet: {
        name: wallet.name
      }
    })
  }

  renderItem = ({ item }) => (
    <WalletCard
      wallet={item}
      onPress={() => this.onPressWallet(item)}
    />
  )

  renderBody = list => (!list.length && !this.loading)
    ? <NoWallets {...this.props.navigation}/>
    : (
      <FlatList
        style={styles.content}
        data={list}
        refreshControl={<RefreshControl refreshing={this.loading} onRefresh={() => this.populate()}/>}
        keyExtractor={(item, index) => String(index)}
        renderItem={this.renderItem}
      />
    )

  render() {
    const { list } = this.props.wallets

    return (
      <View style={styles.container}>
        <TotalBalance wallets={list}/>
        {this.renderBody(list)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: measures.defaultPadding,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  content: {
    marginTop: measures.defaultMargin
  }
})
