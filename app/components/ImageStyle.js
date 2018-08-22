import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagePreview: {
    width: width / 2 - 15,
    marginLeft: 10,
    marginTop: 10,
    height: 75,
    backgroundColor: '#dedfe0'
  },
  imageSelected: {
    width: width / 2 - 15,
    height: 75
  }
})
export default styles
