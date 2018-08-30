import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Style from './rateStyle'


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

export default CustomSectionFooter
