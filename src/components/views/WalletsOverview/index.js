import React, { Component } from 'react';
import { General as GeneralActions, Wallets as WalletActions, Prices as PricesActions } from '../../../common/actions';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('prices', 'wallets')
@observer
export class WalletsOverview extends Component {
  get loading() {
    return this.props.prices.loading || this.props.wallets.loading;
  }

  componentDidMount() {
    this.populate();
  }

  async populate() {
    try {
      await Promise.all([
        WalletActions.loadWallets(),
        PricesActions.getPrice()
      ]); 
    } catch(e) {
      GeneralActions.notify(e.message, 'long');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Wallets Overview</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
