import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScreenTitle, SecondaryInput } from "components";
import { Card, Button } from "react-native-paper";
import { RootState, useSelector } from "../store";
import { Acknowledge } from "features";

const ProfileScreen = () => {
  const { name, dob, gender, phone, email, address, state, district } =
    useSelector((state: RootState) => state.profile);
  const { abhNumberFields } = useSelector((state: RootState) => state.abha);
  const [disabled, setDisabled] = useState(false);
  return (
    <View style={styles.screen}>
      <ScreenTitle title="Your profile details (as per Aadhaar)" />
      <View style={styles.cardCon}>
        <Card style={{ paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Card.Content>
                <SecondaryInput title={"Name"} subtitle={name} />
              </Card.Content>

              <Card.Content
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <SecondaryInput title={"Phone"} subtitle={phone} />
                <SecondaryInput
                  inputStyle={{ paddingHorizontal: 16 }}
                  title={"Gender"}
                  subtitle={gender}
                />
              </Card.Content>
            </View>
            <View>
              <Image
                source={require("../assets/empty.png")}
                style={styles.profileImage}
              />
            </View>
          </View>

          <Card.Content
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <SecondaryInput title={"Date of Birth"} subtitle={dob} />
            <SecondaryInput title={"Email"} subtitle={email} />
          </Card.Content>

          <Card.Content style={{ marginTop: 10 }}>
            <SecondaryInput title={"Address"} subtitle={address} />
          </Card.Content>

          <Card.Content style={{ marginTop: 10 }}>
            <SecondaryInput title={"State"} subtitle={state} />
          </Card.Content>

          <Card.Content style={{ marginTop: 10 }}>
            <SecondaryInput title={"District"} subtitle={district} />
          </Card.Content>

          <Card.Content style={{ marginTop: 20 }}>
            <SecondaryInput
              title={"Your ABHA Number"}
              subtitle={abhNumberFields.join(" ")}
            />
          </Card.Content>
        </Card>
      </View>
      <Acknowledge onChange={(checked) => setDisabled(checked)} />
      <Button
        mode="contained"
        buttonColor={"#0743A1"}
        style={styles.button}
        disabled={!disabled}
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
  cardCon: { flex: 1, marginTop: 10, width: "92%", marginLeft: "4%" },
  button: {
    marginBottom: 10,
    width: "90%",
    marginLeft: "5%",
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    borderRadius: 20,
  },
});

export default ProfileScreen;
