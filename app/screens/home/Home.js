import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  TextInput,
  Dimensions,
  Switch,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
const height = Dimensions.get('window').height
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import Style from './HomeStyle'

const servicesStructure = [
  {
    imageUri:
      'https://www.perdigital.com/contents/brand-logo/Logo_iTunes_Gift_Card.jpg',
    serviceText: 'Itunes GC'
  },
  {
    imageUri:
      'https://images.g2a.com/newlayout/600x351/1x1x0/d554d7a5d2da/59e5ae945bafe388fc3cb5f5',
    serviceText: 'Amazon GC'
  },
  {
    imageUri:
      'https://www.pcgamesupply.com/media/assets/images/MobileGroupImages/steam.png',
    serviceText: 'Steam GC'
  }
]

const CustomSectionHeader = () => (
  <View style={Style.tableViewSectionHeader}>
    <Text style={Style.tableViewSectionHeaderText}>LATEST GC RATES($)</Text>
  </View>
)

const CustomSectionFooter = () => (
  <View style={Style.tableViewSectionFooter}>
    <Text style={Style.tableViewSectionFooterText}>
      Rates are updates regularly
    </Text>
    <Text style={Style.tableViewSectionFooterText}>
      Last updated: 10/08/2018, 10:15pm
    </Text>
  </View>
)

export default class Home extends Component {
  state = {
    isGcSelected: false,
    gcSelected: null
  }

  onGCSelected = gc => {
    this.setState(({ isGcSelected }) => ({
      isGcSelected: true,
      gcSelected: gc
    }))
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
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          style={{ width: '100%' }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.text}>Select GC you want to sell</Text>
          <View style={Style.services}>
            {servicesStructure.map(({ serviceText, imageUri }, key) => {
              return (
                <TouchableHighlight
                  key={key}
                  onPress={() => this.onGCSelected(serviceText)}
                  activeOpacity={10}
                  style={Style.serviceTouchable}
                  underlayColor="#bababa"
                >
                  <View style={Style.servicesImageWrapper}>
                    <Image
                      style={[
                        Style.serviceImage,
                        isGcSelected && gcSelected === serviceText
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
                        isGcSelected && gcSelected === serviceText
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

          <TableView>
            <Section
              headerComponent={<CustomSectionHeader />}
              footerComponent={<CustomSectionFooter />}
            >
              <Cell cellStyle="RightDetail" title="RANGE" detail="RATE" />
              <Cell
                cellStyle="RightDetail"
                titleTextStyle={{ fontSize: 13 }}
                detailTextStyle={{ fontSize: 13 }}
                title="101 - 200"
                detail="$250"
              />
              <Cell
                cellStyle="RightDetail"
                titleTextStyle={{ fontSize: 13 }}
                detailTextStyle={{ fontSize: 13 }}
                title="201 - 1000"
                detail="$255"
              />
              <Cell
                cellStyle="RightDetail"
                titleTextStyle={{ fontSize: 13 }}
                detailTextStyle={{ fontSize: 13 }}
                title="201 - 1000"
                detail="$255"
              />
              <Cell
                cellStyle="RightDetail"
                titleTextStyle={{ fontSize: 13 }}
                detailTextStyle={{ fontSize: 13 }}
                title="E-CODE"
                detail="$200"
              />
            </Section>
          </TableView>
          <View style={Style.amountContainer}>
            <Text style={Style.amountContainerTitle}>
              Please enter denomination of card and quantity in the input boxes
              below.
            </Text>
            <View style={{ margin: 10 }} />
            <Text style={Style.amountContainerTitle}>For example:</Text>
            <Text style={Style.amountContainerSample}>
              Denomination($): 100, Quantity: 2 = $200
            </Text>
            <Text style={Style.amountContainerSample}>
              Equals: 100*2 = $200
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between'
              }}
            >
              <Text>Denomination</Text>
              <Text>Quantity</Text>
              <Text>Amount</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between'
              }}
            >
              <TextInput
                placeholder="Denomination"
                placeholderTextColor="#bababa"
                keyboardType="numeric"
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 100
                }}
              />
              <TextInput
                placeholder="Quantity"
                placeholderTextColor="#bababa"
                keyboardType="numeric"
                style={{
                  borderRadius: 5,
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 100
                }}
              />
              <Text>$10</Text>
            </View>
          </View>
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
