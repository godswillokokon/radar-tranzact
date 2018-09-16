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
    height: '50%'
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
  }
})

export default styles
