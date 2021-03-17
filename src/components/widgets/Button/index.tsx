import React, { FC, ReactElement } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, measures } from '../../../common/styles'

type ButtonProps = {
  children: ReactElement
  onPress: () => void
}

const Button: FC<ButtonProps> = ({ children, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title} children={children} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    padding: measures.defaultPadding,
    borderRadius: 4
  },
  title: {
    color: colors.secondary,
    fontSize: 16
  }
})

export default Button
