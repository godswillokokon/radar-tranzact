import React, { Fragment } from 'react'
import {
  Button,
  Image,
  View,
  Alert,
  Linking,
  Text,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'
import { ImagePicker, Permissions } from 'expo'
import Style from './ImageStyle'

export default class RadarImagePicker extends React.Component {
  state = {
    image: null,
    images: [],
    hasCameraRollPermissions: true,
    hasCameraTakingPermissions: true
  }

  async checkCameratakingPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    if (status !== 'granted') {
      Alert.alert(
        'Hey',
        'Hey! You might want to enable notifications for my app, they are good.',
        [
          { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
        //
      )
      return false
    }
    return true
  }

  async checkCameraRollPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      Alert.alert(
        'Hey',
        'Hey! You might want to enable notifications for my app, they are good.',
        [
          { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
      )
      this.setState({
        hasCameraRollPermissions: false
      })
      return false
    }
    this.setState({
      hasCameraRollPermissions: true
    })
    return true
  }

  addImageBox = () => {
    return (
      <TouchableOpacity onPress={this._pickImage}>
        <View style={Style.imagePreview}>
          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 25,
              height: 25,
              backgroundColor: '#fff',
              borderColor: '#fff',
              borderRadius: 12.5,
              borderWidth: 1
            }}
          >
            <Icon name="md-add" style={{ left: 2, bottom: 3 }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _pickImage = async () => {
    const checkPermissions = await this.checkCameraRollPermission()
    if (!checkPermissions) return
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1
    })

    console.log(result)

    if (!result.cancelled) {
      this.setState(({ images }) => ({ images: images.concat(result.uri) }))
    }
  }

  removeImage = assetUrl => {
    const { images } = this.state
    const cloneImages = [...images]
    const getIdx = cloneImages.indexOf(assetUrl)
    const updatedList = cloneImages.splice(getIdx, 1);
    Alert.alert(
        'Are you sure you want to delete?',
        null,
        [
          { text: 'OK', onPress: () => this.setState({images: cloneImages}) },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
        //
      )
  }

  render() {
    let { image, images, hasCameraRollPermissions } = this.state

    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <View style={Style.listView}>
          {images.length ? (
            <Fragment>
              {images.map((image, key) => (
                <View key={key} style={Style.imagePreview}>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={Style.imageSelected}
                    />
                  )}
                  <TouchableOpacity onPress={() => this.removeImage(image)}>
                    <View style={Style.actionBtnView}>
                      <Icon name="md-close" style={Style.actionBtnIcon} />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
              {this.addImageBox()}
            </Fragment>
          ) : (
            <TouchableOpacity onPress={this._pickImage}>
              <View style={Style.imagePreview}>
                <View style={Style.actionBtnView}>
                  <Icon name="md-add" style={Style.actionBtnIcon} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>

        {!hasCameraRollPermissions && <Text>Permission not granted</Text>}
      </View>
    )
  }
}
