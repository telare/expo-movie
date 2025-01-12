import { btnStyle } from "@/assets/styles/btn";
import { Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function NavigationBtn() {
  const router = useRouter();
  return (
    <TouchableOpacity style={btnStyle.btn} onPress={() => router.back()}>
      <Image src="../../assets/images/left-arrow.png"></Image>
    </TouchableOpacity>
  );
}
