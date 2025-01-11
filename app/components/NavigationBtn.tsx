import { btnStyle } from "@/assets/styles/btn";
import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function NavigationBtn() {
  const router = useRouter();
  return (
    <TouchableOpacity style={btnStyle.btn} onPress={() => router.back()}>
      <Text style={btnStyle.text}>Go</Text>
    </TouchableOpacity>
  );
}
