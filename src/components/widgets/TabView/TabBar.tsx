import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '@common/styles'
import TabBarIcon from './TabBarIcon'

type TabBarProps = {
  tabs: Array<any>
  active: number
  onPressTabItem: (tab: any) => void
}

const TabBar: FC<TabBarProps> = ({ tabs, active, onPressTabItem }) => {
  const renderTab = (tab: any, i: number) => (
    <TabBarIcon
      key={i}
      {...tab}
      active={active === i}
      onPress={() => onPressTabItem(tab.id)}
    />
  )

  return (
    <View style={styles.container}>
      {tabs.map(renderTab)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 48,
    borderTopWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.lightestGray
  }
})

export default TabBar
