import { StyleSheet, View } from "react-native";
import Form from "../components/Form";

export default function SignUp() {
  return (
    <View style={styles.mainCon}>
      <Form type="signup" />
    </View>
  );
}
const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
});
