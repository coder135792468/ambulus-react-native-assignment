import { Text, View, StyleSheet } from "react-native";

export default function ScreenTitlte({}) {
  return (
    <View>
      <Text style={styles.title}>
        You are about to create a new adress using ADHA Number
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#0743A1",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
