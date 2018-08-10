import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import * as theme from '../../utils/Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center'
  },
  services: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10
  },
  servicesImageWrapper: {
    margin: 10
  },
  serviceImage: {
    width: width / 4,
    height: 80,
    borderRadius: 25
  },
  serviceText: { textAlign: 'center' },
  serviceSelectedHightlight: {
    borderColor: theme.colors.gray,
    borderWidth: 2
  },
  serviceSelectedHightlightText: {
    fontWeight: 'bold'
  },
  serviceTouchable: { borderRadius: 25 },
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
  amountContainer: { padding: 20 },
  amountContainerTitle: { fontSize: 13, color: '#2f2f2f' },
  amountContainerSample: { fontSize: 13, color: '#2f2f2f', marginLeft: 10 }
})

export default styles
