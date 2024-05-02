import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RadioButton, ScreenTitle } from "components";
import { OtpInput } from "features";
import {
  useSelector,
  useDispatch,
  setAbhaField,
  RootState,
  setIsAbhaCompleted,
} from "../store";
import { Button } from "react-native-paper";

const AdharScreen = ({ navigation }) => {
  const { limits, abhNumberFields, card, verificationMethods, isCompleted } =
    useSelector((state: RootState) => state.abha);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsAbhaCompleted());
  }, []);

  return (
    <View style={styles.screen}>
      <View style={{ minHeight: 100 }}>
        <ScreenTitle
          title={"You're about to create a new abha address using"}
          subtitle={"ABHA Number"}
        />
      </View>
      <View style={{ backgroundColor: "#e8effd", flex: 1 }}>
        <OtpInput
          limits={limits}
          inputFields={abhNumberFields}
          card={card}
          handleOtpValue={(otps) => {
            dispatch(setAbhaField(otps));
          }}
          verifyButton={
            <Button
              mode="contained"
              buttonColor={"#0743A1"}
              style={styles.button}
            >
              Verify and continue
            </Button>
          }
          footer={
            <View style={styles.cardFooter}>
              <Text style={styles.footerText}></Text>
              <TouchableOpacity
                onPress={() =>
                  console.log("Contact customer care for assitance")
                }
              >
                <Text style={styles.footerText}>Forgetten ABHA Number ?</Text>
              </TouchableOpacity>
            </View>
          }
        />
        <View style={{ flex: 1 }}>
          <RadioButton
            data={verificationMethods}
            onSelect={(method) => console.log(method)}
            label={"Choose an OTP method"}
          />
        </View>
        <Button
          mode="contained"
          buttonColor={"#0743A1"}
          style={styles.button}
          disabled={!isCompleted}
          onPress={() => navigation.navigate("OtpVerification")}
        >
          Continue
        </Button>
      </View>
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
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  footerText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#0743A1",
    marginTop: 10,
    marginBottom: 5,
  },
});
export default AdharScreen;
