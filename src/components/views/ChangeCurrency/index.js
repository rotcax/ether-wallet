import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { colors, measures } from '../../../common/styles'
import { ListItem } from '../../widgets'

@inject('prices')
@observer
export default class ChangeCurrency extends Component {
  selectCurrency(currency) {

  }

  renderItems = (items) => items.map((item, index) => (
    <ListItem onPress={item.action} key={index}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </ListItem>
  ))

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderItems([
          { title: 'Jamaican Dollar', action: () => this.selectCurrency('jmd') },
          { title: 'Dollar', action: () => this.selectCurrency('usd') },
          { title: 'Euro', action: () => this.selectCurrency('eur') },
        ])}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultBackground,
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  itemTitle: {
    fontSize: measures.fontSizeMedium,
    margin: measures.defaultMargin
  }
})
