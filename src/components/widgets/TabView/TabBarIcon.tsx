import React, { FC } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Icon } from '@components/widgets'
import { colors } from '@common/styles'

type TabBarIconProps = {
  active: any
  icon: string
  label: string
  onPress: () => void
}

const getLabelColor = (active: any) => active ? styles.activeLabel : styles.label

const TabBarIcon: FC<TabBarIconProps> = ({ active, icon, label, onPress, ...props }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Icon color={active ? colors.black : colors.gray} {...props} name={icon} />
      <Text style={getLabelColor(active)}>{label}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  },
  activeLabel: {
    color: colors.black
  },
  label: {
    color: colors.gray
  }
})

export default TabBarIcon
