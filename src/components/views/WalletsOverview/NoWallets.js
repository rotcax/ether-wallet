import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Body, Button, Content, Card, CardItem, Fab, Text } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

export default (navigation) => {
  const [active, setActive] = useState(false);

  const blackColor = '#000';
  const onPress = () => setActive(!active);

  return (
    <View style={styles.container}>
      <Content>
        <Card>
          <CardItem header>
            <Text>Oops! Looks like you have no Wallets :(</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Click the button below to add one :)</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Fab
        active={active}
        direction="up"
        containerStyle={{  }}
        style={{ backgroundColor: blackColor }}
        position="bottomRight"
        onPress={() => onPress()}
      >
        <FontAwesome5 name="plus" size={30} color={blackColor}/>
        <Button style={styles.whiteColor}>
          <FontAwesome5 name="ethereum" size={30} color={blackColor} onPress={() => navigation.navigate('NewWalletName')}/>
        </Button>
      </Fab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  whiteColor: {
    backgroundColor: '#FFF'
  }
});
