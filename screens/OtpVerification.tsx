import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  useSelector,
  RootState,
  useDispatch,
  setIsOtpCompleted,
  setOtpField,
} from "../store";
import { ScreenTitle } from "../components";
import { OtpInput } from "features";
import { Button } from "react-native-paper";

const OtpVerification = ({ navigation }) => {
  const { limits, otpFields, card, isCompleted } = useSelector(
    (state: RootState) => state.otp
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsOtpCompleted());
  }, []);

  return (
    <View style={styles.screen}>
      <View style={{ minHeight: 150 }}>
        <ScreenTitle title="We have send a 6 digit OTP to xxxxx987" />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#e8effd",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: -110,
          }}
        >
          <Image source={require("../assets/empty.png")} style={styles.image} />
          <OtpInput
            limits={limits}
            inputFields={otpFields}
            card={card}
            inputStyles={styles.inputStyles}
            handleOtpValue={(otps) => {
              dispatch(setOtpField(otps));
            }}
            verifyButton={
              <Button
                mode="contained"
                buttonColor={"#0743A1"}
                style={styles.button}
                disabled={!isCompleted}
                onPress={() => navigation.navigate("ProfileScreen")}
              >
                Verify and continue
              </Button>
            }
            footer={
              <View style={styles.cardFooter}>
                <TouchableOpacity disabled={true}>
                  <Text style={{ ...styles.footerText, ...{ color: "#555" } }}>
                    Didn't receive OTP ?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.footerText}>Resend OTP</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
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
    marginTop: 10,
  },
  inputStyles: {
    width: 45,
    height: 40,
    margin: 2,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default OtpVerification;
