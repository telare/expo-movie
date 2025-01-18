import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

type HeaderProps = {
  isNavBtns: boolean;
};
export default function Header({ isNavBtns }: HeaderProps) {
  const router = useRouter();
  return (
    <View style={navStyles.mainCon}>
      {isNavBtns ? (
        <TouchableOpacity
          style={navStyles.navBtn}
          onPress={() => router.back()}
        >
          <Image
            source={require("../../assets/images/left-arrow.png")}
            style={navStyles.img}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={navStyles.navBtn}>
          <Image
            source={require("../../assets/images/menu.png")}
            style={navStyles.img}
          />
        </TouchableOpacity>
      )}
      
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

  img: {
    width: 15,
    height: 15,
  },
  navBtn: {
    backgroundColor: "#6C47DB",
    width: 40,
    height: 40,
    borderRadius: 13,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});
