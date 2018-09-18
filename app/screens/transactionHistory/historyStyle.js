import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import * as theme from '@utils/Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: theme.colors.darkFusion,
    margin: 10,
    marginTop: 25,
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  },
  tOverview: {
    backgroundColor: theme.colors.darkFusion,
    height: '35%'
  },
  overviewContainer: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  overviewTitle: {
    fontSize: 10,
    marginBottom: 8,
  },
  overviewTitleTotal: {
    color: '#0fa828'
  },
  overviewTitlePending: {
    color: '#dbab00'
  },
  overviewResult: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  logContainer: {
    margin: 20
  },
  logWrapper: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#b2b2b2',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3
  },
  logDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logDate: {
    marginBottom: 10,
    color: '#b2b2b2'
  },
  status: {
    height: 10,
    width: 10,
    borderRadius: 5,
    top: 2,
    marginRight: 5
  },
  statusVerifying: {
    backgroundColor: '#d89517'
  },
  statusCaution: {
    backgroundColor: '#e20606'
  },
  statusSuccess: {
    backgroundColor: '#1b871b'
  },
  statusText: {
    color: '#b2b2b2',
    fontSize: 12
  },
  logDivider: {borderWidth: 0.5, borderColor: '#b2b2b2', marginVertical: 10, marginHorizontal: 5}
})

export default styles
