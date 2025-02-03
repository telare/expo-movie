import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "./Button";
import { SafeAreaView } from "react-native-safe-area-context";
type HeaderProps = {
  isMenuBtn: boolean;
  title?: string;
  additionalBtnRender?: React.ReactElement;
};
export default function Header({
  isMenuBtn,
  title,
  additionalBtnRender,
}: HeaderProps) {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={navStyles.mainCon}>
        <View style={{ flex: 1}}>
          {isMenuBtn ? (
            <Button
              // func={() => router.back()}
              imageH={20}
              imageW={20}
              height={40}
              width={40}
              image={require("../../assets/images/menu.png")}
              backgroundColor="#6C47DB"
              borderRadius={10}
            />
          ) : (
            <Button
              func={() => router.back()}
              imageH={20}
              imageW={20}
              height={40}
              width={40}
              image={require("../../assets/images/left-arrow.png")}
              backgroundColor="#6C47DB"
              borderRadius={10}
            />
          )}
          
        </View>
        <View style={{ flex: 2}}>
          {title && <Text style={navStyles.text}>{title}</Text>}
        </View>
        <View style={{ flex: 1}}>{additionalBtnRender}</View>
      </View>
    </SafeAreaView>
  );
}

const navStyles = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
    height: 50,
    flexDirection: "row",
    paddingLeft: "4%",
    paddingRight: "4%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 25,
  },
});
