import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Icon } from "native-base";
import Style from "./rateStyle";

class CustomSectionHeader extends Component {
  render() {
    const { selectedGC } = this.props;
    return (
      <View style={Style.tableViewSectionHeader}>
        <Icon name="flash" size={10} style={{color:"gold", position: 'absolute', bottom: '1%', left: '5%'}} />
        <Text style={Style.tableViewSectionHeaderText}>
          LATEST {selectedGC || "ITUNES"} GC RATES($)
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ misc }) => ({
  selectedGC: misc.selectedGC
});
export default connect(mapStateToProps)(CustomSectionHeader);
