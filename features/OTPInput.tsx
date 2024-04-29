import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const OtpInput = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = [];
  const limits = [2, 4, 4, 4];

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value.length == limits[index] && value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.box}
            maxLength={limits[index]}
            keyboardType="numeric"
            onChangeText={(value) => handleOtpChange(value, index)}
            value={digit}
            ref={(input) => {
              inputs[index] = input;
            }}
          />
        ))}
      </View>
      <View style={{ flex: 1 }}></View>
      <Button
        mode="contained"
        buttonColor={"#0743A1"}
        style={styles.button}
        onPress={() => navigation.navigate("OtpVerification")}
      >
        Continue
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    backgroundColor: "#fff",
    borderRadius: 4,
    width: 50,
    height: 50,
    margin: 10,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    marginBottom: 10,
    width: "90%",
    marginLeft: "5%",
  },
});
export default OtpInput;
