import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
export default function ImgCarousel() {
  return (
    <View style={ImgCarouselStyles.con}>
      <TouchableOpacity
        style={ImgCarouselStyles.btn}
        // onPress={}
      >
        <Image
          style={ImgCarouselStyles.btnImg}
          source={require("../../../assets/images/left-arrow.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={ImgCarouselStyles.btn}
        // onPress={}
      >
        <Image
          style={ImgCarouselStyles.btnImg}
          source={require("../../../assets/images/right-arrow.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
const ImgCarouselStyles = StyleSheet.create({
  con: {
    width: 500,
    height: 200,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carouselImg: {
    width: 390,
    height: 200,
  },

  btn: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  btnImg: {
    width: 20,
    height: 20,
  },
  item: {
    backgroundColor: "#ddd",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  rounded: {
    borderRadius: 20,
  },
  text: {
    color: "#000",
  },
});
