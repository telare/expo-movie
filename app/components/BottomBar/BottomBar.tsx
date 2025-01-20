import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function BottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const barIcons: ImageSourcePropType[] = [
    require("../../../assets/images/home.png"),
    require("../../../assets/images/user.png"),
    require("../../../assets/images/favorite.png"),
  ];
  const tabs: string[] = ["home", "profile", "favorite"];
  return (
    <View style={bottomTabBar.mainCon}>
      <View style={bottomTabBar.barCon}>
        {tabs.map((tab, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate(tab)}
            style={bottomTabBar.barItem}
          >
            <Image source={barIcons[i]} style={bottomTabBar.barIcon} />
          </TouchableOpacity>
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
