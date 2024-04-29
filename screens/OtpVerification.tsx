import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { ScreenTitle } from "../components";

const OtpVerification = ({ navigation }) => {
  const balance = useSelector((state: any) => state.adha.value);
  console.log(balance);

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
