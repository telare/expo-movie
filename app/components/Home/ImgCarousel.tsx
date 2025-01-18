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

  const [currentImgIndex, setCurrentImgIndex] = useState<number>(1);
  function handleCarouselSideClick(direction: "right" | "left") {
    if (currentImgIndex > 0 && currentImgIndex < 2) {
      if (direction == "left") {
        setCurrentImgIndex((prev) => prev - 1);
      } else {
        setCurrentImgIndex((prev) => prev + 1);
      }
    }
    
  }
  // useEffect(() => {
  //   console.log(currentImgIndex);
  // }, [currentImgIndex]);

  return (
    <View style={ImgCarouselStyles.mainCon}>
      <View style={ImgCarouselStyles.con}>
        <Image
          style={ImgCarouselStyles.carouselImg}
          source={imgsArr[currentImgIndex]}
        />
        <View style={ImgCarouselStyles.btnsCon}>
          <TouchableOpacity
            style={ImgCarouselStyles.btn}
            onPress={() => handleCarouselSideClick("left")}
          >
            <Image
              style={ImgCarouselStyles.btnImg}
              source={require("../../../assets/images/left-arrow.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={ImgCarouselStyles.btn}
            onPress={() => handleCarouselSideClick("right")}
          >
            <Image
              style={ImgCarouselStyles.btnImg}
              source={require("../../../assets/images/right-arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={ImgCarouselStyles.paginationCon}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <TouchableOpacity
            key={i}
              style={
                currentImgIndex === i
                  ? [
                      ImgCarouselStyles.paginationBtn,
                      ImgCarouselStyles.activePaginationBtn,
                    ]
                  : ImgCarouselStyles.paginationBtn
              }
              onPress={() => setCurrentImgIndex(i)}
            ></TouchableOpacity>
          ))}
      </View>
    </View>
  );
}
const ImgCarouselStyles = StyleSheet.create({
  mainCon: {
    alignItems: "center",
  },
  con: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  carouselImg: {
    width: "90%",
    height: 200,
    borderRadius: 20,
  },

  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  btnsCon: {
    width: "90%",
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
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  rounded: {
    borderRadius: 20,
  },

  text: {
    color: "black",
  },
  paginationCon: {
    width: "90%",
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
    top: -20,
    bottom: 0,
  },
  paginationBtn: {
    width: 10,
    height: 10,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  activePaginationBtn: {
    backgroundColor: "#6C47DB",
  },
});
