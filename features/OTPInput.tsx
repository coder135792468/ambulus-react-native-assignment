import React, { Fragment, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

const OtpInput = ({
  limits,
  otpFields,
  card,
  verifyButton = null,
  footer = null,
  inputStyles = {},
}) => {
  const [otp, setOtp] = useState(otpFields);
  const inputs = [];

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value.length == limits[index] && value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
    if (index == newOtp.length - 1 && value.length === limits[index]) {
      inputs[index].blur();
    }
  };

  return (
    <View style={{ marginVertical: 30 }}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <Text style={styles.cardTitle}>{card.title}</Text>
          {card.subtitle && (
            <Text style={styles.cardSubTitle}>{card.subtitle}</Text>
          )}
        </Card.Content>
        <Card.Actions>
          <View style={styles.container}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={{ ...styles.box, ...inputStyles }}
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
        </Card.Actions>
        {card.verifyInput && <Fragment>{verifyButton}</Fragment>}
      </Card>
      {footer}
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    width: "96%",
    marginLeft: "2%",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 12,
  },
  cardSubTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#999",
    marginLeft: 12,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  box: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    backgroundColor: "#fff",
    borderRadius: 4,
    width: 60,
    height: 50,
    margin: 4,
    textAlign: "center",
    fontSize: 20,
  },
});
export default OtpInput;
