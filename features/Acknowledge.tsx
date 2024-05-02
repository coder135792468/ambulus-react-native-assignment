import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

const Acknowledge = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.checkBoxContainer}>
      <Checkbox.Item
        label={
          "I agree to share my indentity information to NHA to create my ABHA address"
        }
        labelVariant={"bodySmall"}
        status={checked ? "checked" : "unchecked"}
        color="#0743A1"
        style={{ flexDirection: "row-reverse" }}
        onPress={() => {
          onChange(!checked);
          setChecked((check) => !check);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    marginLeft: "4%",
    marginBottom: 10,
  },
});
export default Acknowledge;
