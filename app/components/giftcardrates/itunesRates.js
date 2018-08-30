import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import CustomSectionHeader from './customHeader'
import CustomSectionFooter from './customFooter'

class ItunesRate extends Component {
  render() {
    return (
      <TableView>
        <Section
          headerComponent={<CustomSectionHeader />}
          footerComponent={<CustomSectionFooter />}
        >
          <Cell
            cellStyle="RightDetail"
            title="CURRENCY RANGE"
            detailTextStyle={{ fontSize: 13 }}
            titleTextStyle={{ fontSize: 13 }}
            detail="RATE"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={{ fontSize: 13 }}
            detailTextStyle={{ fontSize: 13 }}
            title="$101 - $200"
            detail="$250"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={{ fontSize: 13 }}
            detailTextStyle={{ fontSize: 13 }}
            title="$201 - $1000"
            detail="$255"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={{ fontSize: 13 }}
            detailTextStyle={{ fontSize: 13 }}
            title="$201 - $1000"
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
    )
  }
}

export default ItunesRate
