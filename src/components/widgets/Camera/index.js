import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Vibration, View } from 'react-native'
import Icon from '../Icon'
import { colors } from '@common/styles'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera as ExpoCamera } from 'expo-camera'
import Modal from 'react-native-modal'
import * as Permissions from 'expo-permissions'

const { BarCodeType } = BarCodeScanner.Constants

export default class Camera extends Component {
  state = {
    isModalVisible: false
  }

  async show() {
    try {
      const { status } = await Permissions.getAsync(Permissions.CAMERA);
      if (status === 'granted') this.setState({ isModalVisible: true })
      else {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        if (status === 'granted') this.setState({ isModalVisible: true })
        else throw new Error('Not allowed to use the camera.')
      }
    } catch (e) {
      console.error(e)
      this.setState({ isModalVisible: false })
    }
  }

  hide() {
    this.setState({ isModalVisible: false })
  }

  onBarCodeRead({ type, data }) {
    if (type === BarCodeType.qr) {
      Vibration.vibrate()
      this.hide()
      this.props.onBarCodeRead(data)
    }
  }

  renderView = (onClose) => (
    <View style={styles.container}>
      <ExpoCamera
        style={styles.camera}
        barCodeScannerSettings={{
          barCodeTypes: BarCodeType.qr
        }}
        onBarCodeScanned={(data) => this.onBarCodeRead(data)}
      />
      <TouchableWithoutFeedback onPress={onClose}>
        <Icon name='close' color={colors.white} style={styles.closeIcon} />
      </TouchableWithoutFeedback>
      <View style={styles.marker} />
    </View>
  )

  render() {
    const { modal, onClose } = this.props

    return !modal ? this.renderView(onClose) : (
      <Modal
        onBackButtonPress={onClose}
        isVisible={this.state.isModalVisible}
        children={this.renderView(onClose)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  camera: {
    flex: 1
  },
  closeIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 8,
    right: 10
  },
  marker: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: 'green'
  }
})
