import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const SecondaryInput = ({ inputStyle = {}, title, subtitle }) => {
  return (
    <View style={inputStyle}>
      <Text variant={"bodyMedium"}>{title}</Text>
      <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default SecondaryInput;
