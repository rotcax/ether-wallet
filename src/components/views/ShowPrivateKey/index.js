import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, measures } from '@common/styles'
import QRCode from 'react-native-qrcode-svg'

export default class ShowPrivateKey extends Component {
  render() {
    const { privateKey } = this.props.route.params

    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <QRCode size={256} value={privateKey} />
        </View>
        <Text style={styles.centered}>{privateKey}</Text>
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
  centered: {
    alignSelf: 'center',
    textAlign: 'center'
  }
})
