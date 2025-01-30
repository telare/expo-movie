import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "./Button";

export default function Header() {
  const router = useRouter();
  return (
    <View style={navStyles.mainCon}>
      <Button
        func={() => router.back()}
        title="<"
        height={40}
        width={40}
        fontSize={25}
        backgroundColor="#6C47DB"
        borderRadius={10}
      />
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
});
