import { StyleSheet } from 'react-native'
import * as theme from '@utils/Theme'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    alignItems: 'center'
  },
  tableViewSectionHeader: {
    paddingBottom: 10
  },
  tableViewSectionHeaderText: { textAlign: 'center', color: '#667c88' },
  tableViewSectionFooter: {
    paddingTop: 10,
    paddingLeft: 10
  },
  tableViewSectionFooterText: {
    textAlign: 'center',
    color: '#667c88',
    fontSize: 10
  },
  tableViewSectionDetailTextStyle: {
    fontSize: 13
  },
  tableViewSectionTitleTextStyle: {
    fontSize: 13
  }
})

export default styles
