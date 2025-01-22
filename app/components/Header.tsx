import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "./Button";


export default function Header() {
  const router = useRouter();
  return (
    <View style={navStyles.mainCon}>
      
        
      <Button func={() => router.back()} image={require("../../assets/images/left-arrow.png")} height={40} width={40} backgroundColor="#6C47DB" borderRadius={10}/>
      
    </View>
  );
}

const navStyles = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
    height: 50,
    gap: 85,
    flexDirection: "row",
    alignItems: "center",
  },

  img: {
    width: 15,
    height: 15,
  },
  navBtn: {
    backgroundColor: "#6C47DB",
    width: 40,
    height: 40,
    borderRadius: 13,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});
