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
import Style from './rateStyle'

class SteamRate extends Component {
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
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            detail="RATE"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            title="$101 - $200"
            detail="$250"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            title="$201 - $1000"
            detail="$155"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            title="$201 - $1000"
            detail="$455"
          />
          <Cell
            cellStyle="RightDetail"
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            title="E-CODE"
            detail="$500"
          />
        </Section>
      </TableView>
    )
  }
}

export default SteamRate
