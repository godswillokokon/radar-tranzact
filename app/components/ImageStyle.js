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
  },
  actionBtnView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 15,
    borderWidth: 1
  },
  actionBtnIcon: { left: 4, bottom: 1 }
})
export default styles
