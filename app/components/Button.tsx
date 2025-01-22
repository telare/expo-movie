import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type Btn = {
  title?: string;
  image?: ImageSourcePropType;
  width: number;
  height: number;
  fontSize?: number;
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  func: () => void;
};

export default function Button({
  title,
  image,
  width,
  height,
  fontSize,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  func,
}: Btn) {
  return (
    <TouchableOpacity
      style={[
        {
          width: width,
          height: height,
          backgroundColor: backgroundColor ? backgroundColor : undefined,
          borderRadius: borderRadius ? borderRadius : 0,
          borderColor: borderColor ? borderColor : undefined,
          borderWidth : borderWidth ? borderWidth : 0
        },
        btnStyles.mainCon,
      ]}
      onPress={func}
    >
      {image && <Image style={btnStyles.image} source={image} />}
      {title && (
        <Text style={[{ fontSize: fontSize ? fontSize : 10 }, btnStyles.text]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
const btnStyles = StyleSheet.create({
  mainCon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    
  },

  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontFamily: "Inter_24pt-Regular.ttf",
  },
  image: {
    width: 35,
    height: 35,
  },
});
