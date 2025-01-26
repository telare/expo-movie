import { userStore } from "@/store/userStore";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image, View } from "react-native";

export default function PersonalInfo() {
  const userInfo = userStore();
  const profilePhoto: string | null = userInfo.profileURL;
  const userData: {
    title: string;
    value: string;
  }[] = [
    { title: "NickName", value: userInfo.nickname },
    { title: "E-mail", value: userInfo.email },
  ];
  return (
    <View style={profileStyles.mainCon}>
      <Image
        style={profileStyles.image}
        source={
          profilePhoto
            ? { uri: profilePhoto }
            : require("../../../assets/images/user.png")
        }
      />
      <View style={{marginLeft:'5%'}}>
      {userData.map((data, i) => (
         <View>
          <Text key={i} style={profileStyles.title}>
            {data.title}
          </Text>
          <Text key={i} style={profileStyles.text}>
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
