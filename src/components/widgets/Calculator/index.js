import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../../common/styles'
import NumberGrid from '../NumberGrid'
import Panel from './panel'

export default class Calculator extends React.Component {
  get amount() {
    return this.refs.panel.amount
  }

  onPressNumber(number) {
    this.refs.panel.onChange(number)
  }

  render() {
    return (
      <View style={styles.container}>
        <Panel ref="panel" />
        <View style={styles.bottomContainer}>
          <NumberGrid onPressNumber={(number) => this.onPressNumber(number)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultBackground,
    flex: 5,
    alignItems: 'stretch'
  },
  bottomContainer: {
    flex: 4,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})
