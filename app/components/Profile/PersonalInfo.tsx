
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Image, View } from "react-native";

export default function PersonalInfo() {
  const [userInfo, setUserInfo] = useState<{
    nickname: string;
    email: string;
    photoUrl:string
  }>();
  useEffect(() => {
    AsyncStorage.getItem("user").then((result) => {
      if (result) {
        setUserInfo(JSON.parse(result));
      }
    });
    console.log(userInfo?.photoUrl)
  }, []);
 
  const userData: {
    title: string;
    value: string;
  }[] = [
    { title: "NickName", value: userInfo ? userInfo.nickname : "user" },
    { title: "E-mail", value: userInfo ? userInfo.email : "example@gmail.com" },
  ];
  return (
    <View style={profileStyles.mainCon}>
      <Image
        style={profileStyles.image}
        source={
          userInfo
            ? { uri: userInfo.photoUrl }
            : require("../../../assets/images/user.png")
        }
      />
      <View style={{ marginLeft: "5%" }}>
        {userData.map((data, i) => (
          <View key={i}>
            <Text  style={profileStyles.title}>
              {data.title}
            </Text>
            <Text  style={profileStyles.text}>
              {data.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const profileStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 23,
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter_24pt-Regular.ttf",
    color: "white",
  },
  title: {
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 20,
    fontWeight: "500",
  },
});
