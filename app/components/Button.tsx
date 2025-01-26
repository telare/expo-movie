import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type Btn = {
  title?: string;
  image?: ImageSourcePropType;
  width: DimensionValue;
  height: DimensionValue;
  fontSize?: number;
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  position?: "absolute" | "relative";
  top?: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  right?: DimensionValue;
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
  position,
  top,
  bottom,
  left,
  right,
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
          borderWidth: borderWidth ? borderWidth : 0,
          position: position ? position : undefined,
          top: top ? top : undefined,
          bottom: bottom ? bottom : undefined,
          left: left ? left : undefined,
          right: right ? right : undefined,
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
