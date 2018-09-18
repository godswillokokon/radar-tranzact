import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import * as theme from '@utils/Theme'
import metrics from "../../config/metrics";

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8;


const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
    flexDirection: "column",
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: "white"
  },
  indexLogoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 30
  },
  indexBottom: {
    backgroundColor: theme.colors.darkFusion
  },
  //login
  InputFormContainer: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  InputFormForm: {
    marginTop: 20
  },
  InputFormFooter: {
    height: 100,
    justifyContent: 'center'
  },
  InputFormAccoutButton: {
    backgroundColor: 'white'
  },
  InputFormAccountButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
  InputFormAccountLink: {
    color: '#FFFFFF',
    alignSelf: 'center',
    padding: 20
  }
})

export default styles
