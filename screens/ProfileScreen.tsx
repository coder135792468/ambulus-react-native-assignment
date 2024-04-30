import React from "react";
import { StyleSheet, View } from "react-native";
import { ScreenTitle } from "components";
import { Card, Text, Button } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <ScreenTitle title="Your profile details (as per Aadhaar)" />
      <View style={{ flex: 1 }}>
        <Card>
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>
      </View>

      <Button
        mode="contained"
        buttonColor={"#0743A1"}
        style={styles.button}
        onPress={() => {}}
      >
        Continue
      </Button>
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
});

export default ProfileScreen;
