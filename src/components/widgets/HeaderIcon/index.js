import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { measures } from '../../../common/styles'
import Icon from '../Icon'

const HeaderIcon = ({ onPress, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Icon {...props}/>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: measures.defaultMargin * 2
  }
})

export default HeaderIcon
