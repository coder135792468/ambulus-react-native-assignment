import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "react-native-paper";

export default function RadioButton({ data, onSelect, label }) {
  const [userOption, setUserOption] = useState(data[0].value);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.radioContainer}>
        {data.map((option) => {
          const selected = option.value === userOption ? styles.selected : {};
          const extraStyles = option.id === 2 ? { borderLeftWidth: 1 } : {};
          return (
            <Pressable
              style={{ ...styles.unselected, ...selected, ...extraStyles }}
              onPress={() => selectHandler(option.value)}
              key={option.id}
            >
              <Button icon={option.value === userOption ? "check" : ""}>
                <Text style={styles.option}> {option.value}</Text>
              </Button>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginLeft: "5%",
    maxWidth: "90%",
    borderRadius: 30,
    borderColor: "#555",
    overflow: "hidden",
    borderWidth: 1,
  },
  labelText: {
    fontWeight: "500",
    marginLeft: 20,
    marginBottom: 5,
    color: "#444",
  },
  option: {
    fontSize: 14,
    textAlign: "center",
  },
  unselected: {
    padding: 5,
    flex: 1,
    height: "100%",
    borderColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#C1D7FF",
  },
});
