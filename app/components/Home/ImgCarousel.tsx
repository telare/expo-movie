import { useEffect, useState } from "react";
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
export default function ImgCarousel() {
  const imgsArr: ImageRequireSource[] = [
    require("../../../assets/images/img1.jpg"),
    require("../../../assets/images/img2.jpg"),
    require("../../../assets/images/img3.jpg"),
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [currentImg, setCurrentImg] = useState<ImageRequireSource[]>();

  function handleCarouselClick(direction: "right" | "left", index: number) {
    if (index > 0 && index < 3) {
      if (direction == "left") {
        setCurrentImgIndex(currentImgIndex - 1);
      } else {
        setCurrentImgIndex(currentImgIndex + 1);
      }
    }
  }
  useEffect(()=>{
    console.log(currentImgIndex)
  },[currentImgIndex])
  return (
    <View style={ImgCarouselStyles.con}>
      {/* {imgsArr.map((imgPath, index) => (
        <Image
          style={ImgCarouselStyles.carouselImg}
          source={imgPath}
        />
      ))} */}
      {/* <Image
        style={ImgCarouselStyles.carouselImg}
        source={currentImg}
      /> */}
      <View style={ImgCarouselStyles.btnsCon}>
        <TouchableOpacity
          style={ImgCarouselStyles.btn}
          onPress={() => handleCarouselClick("left", currentImgIndex)}
        >
          <Image
            style={ImgCarouselStyles.btnImg}
            source={require("../../../assets/images/left-arrow.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={ImgCarouselStyles.btn}>
          <Image
            style={ImgCarouselStyles.btnImg}
            source={require("../../../assets/images/right-arrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const ImgCarouselStyles = StyleSheet.create({
  con: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  carouselImg: {
    width: 390,
    height: 200,
  },

  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  btnsCon: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
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
