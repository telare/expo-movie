import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "./Button";
import GestureRecognizer from "react-native-swipe-gestures";

type Slider = {
  images: string[];
};

export default function ImgCarousel({ images }: Slider) {
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(1);

  function handleCarouselSideClick(direction: "right" | "left") {
    if (currentImgIndex >= 0 && currentImgIndex <= 2) {
      if (direction == "left") {
        setCurrentImgIndex(currentImgIndex > 0 ? currentImgIndex - 1 : 0);
      } else {
        setCurrentImgIndex(currentImgIndex !== 2 ? currentImgIndex + 1 : 2);
      }
    }
  }

  return (
    <View style={ImgCarouselStyles.mainCon}>
      <GestureRecognizer
        style={ImgCarouselStyles.con}
        onSwipeLeft={() => handleCarouselSideClick("right")}
        onSwipeRight={() => handleCarouselSideClick("left")}
      >
        <Image
          style={ImgCarouselStyles.carouselImg}
          // source={images[currentImgIndex]}
          source={{ uri: images[currentImgIndex] }}
        />
        <View style={ImgCarouselStyles.btnsCon}>
          <Button
            title="<"
            fontSize={30}
            height={30}
            width={30}
            func={() => handleCarouselSideClick("left")}
          />

          <Button
            title=">"
            fontSize={30}
            height={30}
            width={30}
            func={() => handleCarouselSideClick("right")}
          />
        </View>
      </GestureRecognizer>

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
