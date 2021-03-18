import React, { FC, ReactElement } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { measures } from '../../../common/styles'

type ListItem = {
  children: ReactElement
  onPress: () => void
}

const ListItem: FC<ListItem> = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container} children={children} />
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    height: 64,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: measures.defaultPadding
  }
})

export default ListItem
