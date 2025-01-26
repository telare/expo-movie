import { StyleSheet } from "react-native";
import { View } from "react-native";
import Form from "../components/Form";


export default function LogIn() {
  
  return (
    <View style={loginStyles.mainCon}>
      <Form type="login"/>
    </View>
  )
}

export const loginStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
  socialImg: {
    width: 20,
    height: 20,
  },
  btnsCon: {
    marginTop: 10,
    justifyContent: "space-around",
    gap: 10,
  },
});
