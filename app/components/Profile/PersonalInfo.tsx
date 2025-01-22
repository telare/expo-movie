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
    <View>
      <Image
        style={profileStyles.image}
        source={
          profilePhoto
            ? { uri: profilePhoto }
            : require("../../../assets/images/user.png")
        }
      />
      <View>
        {userData.map((data, i) => (
          <Text key={i}>
            {data.title} {data.value}
          </Text>
        ))}
      </View>
    </View>
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
  