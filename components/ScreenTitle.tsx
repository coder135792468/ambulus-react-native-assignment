import { Text, View, StyleSheet } from "react-native";

export default function ScreenTitlte({ title, subtitle = null }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>ABHA Number</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#444",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 12,
  },
  subtitle: {
    color: "#0743A1",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 10,
  },
});
