import { userStore } from "@/store/userStore";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
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
    <SafeAreaView style={profileStyles.mainCon}>
      <Image
        style={profileStyles.image}
        source={
          profilePhoto
            ? { uri: profilePhoto }
            : require("../../assets/images/user.png")
        }
      />
      <View>
        {userData.map((data, i)=>(
          <Text key={i}>{data.title} {data.value}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}
const profileStyles = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
    flex: 1,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 23,
  },
});
