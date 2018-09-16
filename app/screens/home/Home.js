import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Switch,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import { Icon } from 'native-base'
import { connect } from 'react-redux'
import { NewTransaction } from '@actions/TransactionActions'
import RadarImagePicker from '@components/ImagePicker'
import VerificationModal from '@components/verifyModal'
import ItunesRates from '@components/giftcardrates/itunesRates'
import Style from './HomeStyle'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const servicesStructure = [
  {
    imageUri:
      'https://www.perdigital.com/contents/brand-logo/Logo_iTunes_Gift_Card.jpg',
    serviceText: 'Itunes GC',
    key: 'ITUNES'
  },
  {
    imageUri:
      'https://images.g2a.com/newlayout/600x351/1x1x0/d554d7a5d2da/59e5ae945bafe388fc3cb5f5',
    serviceText: 'Amazon GC',
    key: 'AMAZON'
  },
  {
    imageUri:
      'https://www.pcgamesupply.com/media/assets/images/MobileGroupImages/steam.png',
    serviceText: 'Steam GC',
    key: 'STEAM'
  }
]

class Home extends Component {
  state = {
    isGcSelected: false,
    gcSelected: null,
    cardTotalAmount: '0',
    cardImages: []
  }

  onGCSelected = gc => {
    this.setState(({ isGcSelected }) => ({
      isGcSelected: true,
      gcSelected: gc
    }))
  }

  onCardImageSelected = cardImages => {
    console.log(cardImages)
    this.setState({
      cardImages
    })
  }

  onSubmit = () => {
    const { cardImages, cardTotalAmount, gcSelected } = this.state
    const payload = {
      cardImages,
      cardTotalAmount,
      cardType: gcSelected
    }
    console.log('--asub', payload)
    this.props.onSubmit(payload)
  }

  render() {
    const { isGcSelected, gcSelected } = this.state

    return (
      <KeyboardAvoidingView
        style={Style.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={height / 6}
      >
        <VerificationModal />
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          style={{ width: '100%' }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.text}>Select GC you want to sell</Text>
          <View style={Style.services}>
            {servicesStructure.map(({ serviceText, imageUri, key: cardKey }, key) => {
              return (
                <TouchableHighlight
                  key={key}
                  onPress={() => this.onGCSelected(cardKey)}
                  activeOpacity={10}
                  style={Style.serviceTouchable}
                  underlayColor="#bababa"
                >
                  <View style={Style.servicesImageWrapper}>
                    <Image
                      style={[
                        Style.serviceImage,
                        isGcSelected && gcSelected === cardKey
                          ? Style.serviceSelectedHightlight
                          : {}
                      ]}
                      source={{
                        uri: imageUri
                      }}
                    />
                    <Text
                      style={[
                        Style.serviceText,
                        isGcSelected && gcSelected === cardKey
                          ? Style.serviceSelectedHightlightText
                          : {}
                      ]}
                    >
                      {serviceText}
                    </Text>
                  </View>
                </TouchableHighlight>
              )
            })}
          </View>

          <ItunesRates />
          <View style={Style.amountContainer}>
            <Text style={Style.amountContainerTitle}>
              Please enter total amount of card you're selling below.
            </Text>
            <View style={{ margin: 10 }} />

            <View style={Style.amountTextInputContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <TextInput
                  placeholder="Total Amount in usd"
                  placeholderTextColor="#bababa"
                  keyboardType="numeric"
                  onChangeText={cardTotalAmount =>
                    this.setState({ cardTotalAmount })
                  }
                  value={this.state.cardTotalAmount}
                  style={Style.amountTextInput}
                />
              </View>
            </View>
          </View>
          <View>
            <RadarImagePicker onCardImageSelected={this.onCardImageSelected} />
          </View>
          <TouchableOpacity style={Style.buttonContainer} onPress={this.onSubmit}>
            <Text style={Style.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = {
  text: {
    fontSize: 24,
    fontFamily: 'Baskerville',
    textAlign: 'center'
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => dispatch(NewTransaction(data))
})

export default connect(null, mapDispatchToProps)(Home);
