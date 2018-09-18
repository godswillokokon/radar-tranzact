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
        <View style={Style.logContainer}>
          <View style={Style.logWrapper}>
            <Text style={Style.logDate}>MARCH 12 2018</Text>
            <View style={Style.logDetail}>
              <View>
                <Text>ITUNES</Text>
                <View style={{flexDirection: 'row', paddingTop: 3}}>
                  <View style={[Style.status, Style.statusVerifying]} />
                  <Text style={Style.statusText}>VERIFYING</Text>
                </View>
              </View>
              <View>
                <Text>$ 2000</Text>
              </View>
            </View>
            <View style={Style.logDivider} />
            <View style={Style.logDetail}>
              <View>
                <Text>AMAZON</Text>
                <View style={{flexDirection: 'row', paddingTop: 3}}>
                  <View style={[Style.status, Style.statusSuccess]} />
                  <Text style={Style.statusText}>SUCCESS</Text>
                </View>
              </View>
              <View>
                <Text>$ 2000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TransactionHistory;
