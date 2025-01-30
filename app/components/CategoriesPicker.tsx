import { StyleSheet, View } from "react-native";
import Button from "./Button";
type CategoryProps = {
  setPickedCategory: (args: string) => void;
  pickedCategory: string;
};
export default function CategoriesPicker({
  pickedCategory,
  setPickedCategory,
}: CategoryProps) {
  const categories: string[] = ["movie", "tv", "person", "all"];
  return (
    <View style={CategoryPickerStyles.mainCon}>
      {categories.map((category) => {
        if (category !== pickedCategory) {
          return (
            <Button
              title={category}
              func={() => setPickedCategory(category)}
              height="90%"
              width="15%"
              fontSize={15}
              borderColor="white"
              borderRadius={13}
              borderWidth={2}
            />
          );
        } else {
          return (
            <Button
              title={category}
              func={() => setPickedCategory(category)}
              height="90%"
              width="15%"
              backgroundColor="#6C47DB"
              fontSize={15}
              borderRadius={13}
            />
          );
        }
      })}
    </View>
  );
}
const CategoryPickerStyles = StyleSheet.create({
  mainCon: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "7%",
  },
});
