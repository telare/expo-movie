import { StyleSheet, View } from "react-native";
import Form from "../components/Form";

export default function LogIn() {
  return (
    <View style={styles.mainCon}>
      <Form type="login"/>
    </View>
  );
}
const styles = StyleSheet.create({
  mainCon:{
    flex: 1
  }
})