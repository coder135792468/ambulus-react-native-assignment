import React from "react";
import { View, StyleSheet } from "react-native";
import { ScreenTitle } from "../components";

const OtpVerification = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScreenTitle />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#C1D7FF",
    flex: 1,
  },
});
export default OtpVerification;
