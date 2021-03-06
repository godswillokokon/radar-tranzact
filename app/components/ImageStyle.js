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
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    flex: 1
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
    borderWidth: 1,
    flex: 1,
    zIndex: 10
  },
  actionBtnIcon: { left: 4, bottom: 1 },
  amazonGuideText: {
    fontSize: 15,
    color: '#667c88',
    alignSelf: 'center',
    marginHorizontal: 20
  }
})
export default styles
