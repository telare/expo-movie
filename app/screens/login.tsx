import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Form from "../components/Form";
import {textStyles} from "../../assets/styles/shared/text"
import Toast from "react-native-toast-message";
export default function LogIn() {
  return (
    <View style={loginStyles.mainCon}>
      <Toast/>
      <View style={loginStyles.textCon}>
        <Text style={[textStyles.text, {fontSize:35, fontWeight:'600'}]}>Wellcome Back!</Text>
      </View>
      <Form type="login" />
    </View>
  );
}

export const loginStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center", 
    backgroundColor:"black",
    gap:"10%",
  },
  textCon:{
    width:"95%", 
    height:"10%",
    justifyContent:"center",
    alignItems:"center", 
    backgroundColor:"black"
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
