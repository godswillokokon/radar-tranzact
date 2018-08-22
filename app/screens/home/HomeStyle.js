import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import * as theme from '../../utils/Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  amountContainerSample: { fontSize: 13, color: '#2f2f2f', marginLeft: 10 },
  amountTextInputTitle: {
    marginTop: 10
  },
  amountTextInputContainer: {},
  amountTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    width: '100%'
  },
  amountAddNew: {
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: '#2f2f2f',
    color: '#2f2f2f',
    fontWeight: '500',
    marginTop: 15,
    padding: 5,
    width: width / 4
  },
  dividingAmountLine: {
    borderWidth: 0.4,
    borderColor: '#e2e2e2',
    marginTop: 10
  },
  buttonContainer: {
    backgroundColor: theme.colors.darkFusion,
    margin: 10,
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  }
})

export default styles
