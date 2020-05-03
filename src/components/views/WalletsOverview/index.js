import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class WalletsOverview extends Component {
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
