import React from "react";
import { View, StyleSheet } from "react-native";
import { ScreenTitle } from "components";
import { OtpInput } from "features";

const AdharScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScreenTitle />
      <OtpInput navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#C1D7FF",
    flex: 1,
  },
});
export default AdharScreen;
