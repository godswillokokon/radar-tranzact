import React, {Component} from "react"
import {View, Modal, Image, StyleSheet, Text, ActivityIndicator} from "react-native"

class VerificationModal extends Component {
  render() {
    return (
      <Modal
        transparent={true}
        visible
        animationType={"slide"}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <ActivityIndicator size="large" color="#A1A6B4" />
            <Text style={styles.text}>
              Verifying Transaction
            </Text>
          </View>
        </View>
      </Modal>
      )
  }
}

export default VerificationModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center"
  },
  innerContainer: {
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 20
  },
  buttonContainer: {
    backgroundColor: "#fff",
    marginTop: 40,
    padding: 10,
    height: 50,
    width: "90%",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "#515151",
    fontWeight: "700",
    fontSize: 16
  }
});
