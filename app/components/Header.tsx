import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

type HeaderProps = {
  title: string;
  isNavBtns: boolean;
};
export default function Header({ title, isNavBtns }: HeaderProps) {
  const router = useRouter();
  return (
    <View style={navStyles.mainCon}>
      {isNavBtns && (
        <TouchableOpacity style={navStyles.btn} onPress={() => router.back()}>
          <Image
            source={require("../../assets/images/left-arrow.png")}
            style={navStyles.img}
          />
        </TouchableOpacity>
      )}
      <View style={isNavBtns ? navStyles.conT : navStyles.con}>
        <Text style={navStyles.text}>{title}</Text>
      </View>
    </View>
  );
}

const navStyles = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    flexDirection:"row",
    alignItems: "center",
  },
  con: {
    width: 357,
    justifyContent: "center",
    flexDirection: "row",
  },
  conT: {
    width: 357,
    justifyContent: "center",
    paddingRight:60,
    flexDirection: "row",
  },
  img: {
    width: 10,
    height: 10,
  },
  btn: {
    backgroundColor: "#6C47DB",
    width: 50,
    height: 50,
    borderRadius: 13,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 34,
    color:"white",
    fontWeight: "700",
  },
});
