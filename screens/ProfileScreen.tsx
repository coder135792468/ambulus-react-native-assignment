import React from "react";
import { StyleSheet, View } from "react-native";
import { ScreenTitle } from "components";
import { Card, Text, Button } from "react-native-paper";
import { RootState, useSelector } from "../store";

const ProfileScreen = () => {
  const { name, dob, gender, phone, email, address, state, district } =
    useSelector((state: RootState) => state.profile);

  const abhaNumber = "88 2324 2452 2342";
  return (
    <View style={styles.screen}>
      <ScreenTitle title="Your profile details (as per Aadhaar)" />
      <View style={{ flex: 1, marginTop: 10, width: "92%", marginLeft: "4%" }}>
        <Card>
          <Card.Content>
            <Text variant={"bodyMedium"}>Name</Text>
            <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
              {name}
            </Text>
          </Card.Content>

          <Card.Content
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text variant={"bodyMedium"}>Phone</Text>
              <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
                {dob}
              </Text>
            </View>
            <View>
              <Text variant={"bodyMedium"}>Gender</Text>
              <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
                {gender}
              </Text>
            </View>
          </Card.Content>

          {/* Phone number and email */}
          <Card.Content
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text variant={"bodyMedium"}>Date of Birth</Text>
              <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
                {phone}
              </Text>
            </View>
            <View>
              <Text variant={"bodyMedium"}>Gender</Text>
              <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
                {email}
              </Text>
            </View>
          </Card.Content>

          <Card.Content style={{ marginTop: 10 }}>
            <Text variant={"bodyMedium"}>Address</Text>
            <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
              {address}
            </Text>
          </Card.Content>

          <Card.Content style={{ marginTop: 10 }}>
            <Text variant={"bodyMedium"}>State</Text>
            <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
              {state}
            </Text>
          </Card.Content>

          <Card.Content style={{ marginTop: 10 }}>
            <Text variant={"bodyMedium"}>District</Text>
            <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
              {district}
            </Text>
          </Card.Content>

          <Card.Content style={{ marginTop: 20 }}>
            <Text variant={"bodyMedium"}>Your ABHA Number</Text>
            <Text variant={"bodyLarge"} style={{ fontWeight: "bold" }}>
              {abhaNumber}
            </Text>
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
