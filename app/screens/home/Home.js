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
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native'
import { Icon } from 'native-base'
import { connect } from 'react-redux'
import Spinner from "react-native-loading-spinner-overlay";
import { NewTransaction } from '@actions/TransactionActions'
import { SelectGiftCard } from '@actions/MiscActions'
import RadarImagePicker from '@components/ImagePicker'
import VerificationModal from '@components/verifyModal'
import ItunesRates from '@components/giftcardrates/itunesRates'
import AmazonRates from '@components/giftcardrates/amazonRates'
import SteamRates from '@components/giftcardrates/steamRates'
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
    isGcSelected: true,
    gcSelected: 'ITUNES',
    cardTotalAmount: '',
    cardImages: []
  }

  onGCSelected = gc => {
    this.setState(({ isGcSelected }) => ({
      isGcSelected: true,
      gcSelected: gc
    }))
    this.props.onSelectGC(gc)
  }

  onCardImageSelected = cardImages => {
    this.setState({
      cardImages
    })
  }

  onSubmit = async () => {
    const { cardImages, cardTotalAmount, gcSelected } = this.state
    const getUser = await AsyncStorage.getItem('user');
    console.log(getUser);
    const payload = {
      cardImages,
      cardTotalAmount,
      cardType: gcSelected,
      user: getUser
    }
    console.log('--asub', payload)
    this.props.onSubmit(payload, this.props.navigation.navigate)
  }

  render() {
    const { isGcSelected, gcSelected } = this.state
     const {
      misc: { showSpinner },
    } = this.props;

    return (
      <KeyboardAvoidingView
        style={Style.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={height / 6}
      >
        {/*<VerificationModal /> */}
        <Spinner
          visible={showSpinner}
          textContent={"Please wait..."}
          textStyle={{ color: "#333" }}
        />
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

          {gcSelected === 'ITUNES' && <ItunesRates /> }
          {gcSelected === 'AMAZON' && <AmazonRates /> }
          {gcSelected === 'STEAM' && <SteamRates /> }
          <View>
            <RadarImagePicker gcSelected={gcSelected} onCardImageSelected={this.onCardImageSelected} />
          </View>
          <View style={{ margin: 10 }} />
          <View style={Style.amountContainer}>
            <Text style={Style.amountContainerTitle}>
              Please enter total amount of card:
            </Text>

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

const mapStateToProps = ({misc}) => ({
  misc
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => dispatch(NewTransaction(data)),
  onSelectGC: (selection) => dispatch(SelectGiftCard(selection))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
