import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TabBar from './TabBar'

type TabViewProps = {
  tabs: Array<any>
}

const TabView: FC<TabViewProps> = ({ tabs }) => {
  const [active, setActive] = useState(0)

  const onPressItem = (id: number) => {
    const active = tabs.findIndex((tab: any) => tab.id === id)
    setActive(active)
  }

  return (
    <View style={styles.container}>
      <View style={styles.body} children={tabs[active]?.content} />
      <TabBar active={active} tabs={tabs} onPressTabItem={(id) => onPressItem(id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  body: {
    flex: 1
  }
})

export default TabView
