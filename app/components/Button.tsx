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
  imageH?: DimensionValue;
  imageW?: DimensionValue;
  width: DimensionValue;
  height: DimensionValue;
  color?: string;
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
  func,
  image,
  imageH,
  color,
  imageW,
  title,
  fontSize,
  ...rest
}: Btn) {
  return (
    <TouchableOpacity
      style={[
        {
          ...rest,
        },
        btnStyles.mainCon,
      ]}
      onPress={func}
    >
      {image && (
        <Image
          style={{ width: imageW ? imageW : 35, height: imageH ? imageH : 35 }}
          source={image}
        />
      )}
      {title && (
        <Text
          style={[
            btnStyles.text,
            {
              fontSize: fontSize ? fontSize : 10,
              color: color ? color : "white",
            },
          ]}
        >
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
    fontWeight: "600",
    fontFamily: "Inter_24pt-Regular.ttf",
  },
});
