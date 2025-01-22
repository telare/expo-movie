import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import Button from "./Button";
export default function BottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const barIcons: ImageSourcePropType[] = [
    require("../../assets/images/home.png"),
    require("../../assets/images/search.png"),
    require("../../assets/images/user.png"),
   
  ];
  const tabs: string[] = ["home","search", "profile" ];
  return (
    <View style={bottomTabBar.mainCon}>
      <View style={bottomTabBar.barCon}>
        {tabs.map((tab, i) => (
          <Button
            key={i}
            fontSize={25}
            height={50}
            backgroundColor="#37246e"
            borderRadius={10}
            width={50}
            func={() => navigation.navigate(tab)}
            image={barIcons[i]}
          />
        ))}
      </View>
    </View>
  );
}
const bottomTabBar = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
    width: "100%",
    height: "9%",
    alignItems: "center",
    justifyContent: "center",
  },
  barCon: {
    backgroundColor: "#6C47DB",
    width: "90%",
    height: "80%",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  barItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#37246e",
    borderRadius: 15,
    width: 50,
    height: 50,
  },
  barIcon: {
    width: 35,
    height: 35,
  },
  text: {
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 19,
    fontWeight: "600",
  },
});
