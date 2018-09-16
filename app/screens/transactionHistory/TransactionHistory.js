import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Switch,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Icon } from "native-base";
import { connect } from "react-redux";
import Style from "./historyStyle";

class TransactionHistory extends Component {
  kFormatter(num, digits) {
    var units = ["k", "M", "G", "T", "P", "E", "Z", "Y"],
      decimal;

    for (var i = units.length - 1; i >= 0; i--) {
      decimal = Math.pow(1000, i + 1);

      if (num <= -decimal || num >= decimal) {
        return +(num / decimal).toFixed(digits) + units[i];
      }
    }

    return num;
  }
  render() {
    return (
      <View>
        <View style={Style.tOverview}>
          <View style={Style.overviewContainer}>
            <View>
              <Text style={[Style.overviewTitle, Style.overviewTitleTotal]}>
                TOTAL CASHOUTS
              </Text>
              <Text style={Style.overviewResult}>
                $ {this.kFormatter(50000)}
              </Text>
            </View>
            <View>
              <Text style={[Style.overviewTitle, Style.overviewTitlePending]}>
                PENDING PAYOUTS
              </Text>
              <Text style={Style.overviewResult}>$ {this.kFormatter(200)}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TransactionHistory;
