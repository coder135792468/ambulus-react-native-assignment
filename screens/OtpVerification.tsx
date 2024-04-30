import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector, RootState } from "../store";
import { ScreenTitle } from "../components";
import { OtpInput } from "features";
import { Button } from "react-native-paper";

const OtpVerification = ({ navigation }) => {
  const { limits, otpFields, card } = useSelector(
    (state: RootState) => state.otp
  );

  return (
    <View style={styles.screen}>
      <View style={{ minHeight: 100 }}>
        <ScreenTitle title="We have send a 6 digit OTP to xxxxx987" />
      </View>
      <View style={{ flex: 1, backgroundColor: "#e8effd" }}>
        <OtpInput
          limits={limits}
          otpFields={otpFields}
          card={card}
          inputStyles={styles.inputStyles}
          verifyButton={
            <Button
              mode="contained"
              buttonColor={"#0743A1"}
              style={styles.button}
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              Verify and continue
            </Button>
          }
          footer={
            <View style={styles.cardFooter}>
              <Text style={styles.footerText}>Didn't receive OTP ?</Text>
              <Text style={styles.footerText}>Resend OTP</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#C1D7FF",
    flex: 1,
  },
  button: {
    marginBottom: 10,
    width: "90%",
    marginLeft: "5%",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  footerText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#0743A1",
    marginTop: 5,
  },
  inputStyles: {
    width: 45,
    height: 40,
    margin: 2,
    marginBottom: 20,
  },
});
export default OtpVerification;
