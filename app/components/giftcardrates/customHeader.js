import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Style from './rateStyle'

const CustomSectionHeader = () => (
  <View style={Style.tableViewSectionHeader}>
    <Text style={Style.tableViewSectionHeaderText}>LATEST GC RATES($)</Text>
  </View>
)

export default CustomSectionHeader
