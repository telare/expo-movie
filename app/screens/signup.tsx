import { StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import { textStyles } from "@/assets/styles/shared/text";
import Toast from "react-native-toast-message";

export default function SignUp() {
  return (
    <View style={signUpstyles.mainCon}>
      <Toast />
      <View style={signUpstyles.textCon}>
        <Text style={[textStyles.text, { fontSize: 35, fontWeight: "600" }]}>
          Start Your Journey
        </Text>
        <Text style={[textStyles.text, { fontSize: 16, fontWeight: "500" }]}>
          Lets create account with your data
        </Text>
      </View>
      <Form type="signup" />
    </View>
  );
}
const signUpstyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap: "10%",
  },
  textCon: {
    width: "95%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
