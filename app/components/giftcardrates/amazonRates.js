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

class AmazonRates extends Component {
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
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="CARD ONE"
            detail="$213"
          />
          <Cell
            cellStyle="RightDetail"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="CARD TWO"
            detail="$225"
          />
          <Cell
            cellStyle="RightDetail"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="CARD THREE"
            detail="$655"
          />
        </Section>
      </TableView>
    )
  }
}

export default AmazonRates
