import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handleNextClick: () => void;
  handlePageClick: (i: number) => void;
  handleBackClick: () => void;
};
export default function Pagination({
  totalPages,
  currentPage,
  handleNextClick,
  handlePageClick,
  handleBackClick,
}: PaginationProps) {
  return (
    <View style={paginationStyles.mainCon}>
      <Button
        func={() => handleNextClick}
        title="<"
        height={30}
        width={30}
        fontSize={20}
        borderColor="white"
        borderWidth={2}
        borderRadius={5}
      />

      {Array(totalPages)
        .fill("")
        .map((_, index) => {
          if (currentPage === index) {
            return (
              <Button
                func={() => handlePageClick(index)}
                key={index}
                title={index.toString()}
                height={30}
                width={30}
                fontSize={20}
                backgroundColor="#432c8a"
                borderRadius={5}
              />
            );
          } else {
            return (
              <Button
                func={() => handlePageClick(index)}
                key={index}
                title={index.toString()}
                height={30}
                width={30}
                fontSize={20}
                borderColor="white"
                borderWidth={2}
                borderRadius={5}
              />
            );
          }
        })}
      <Button
        func={() => handleBackClick}
        title=">"
        height={30}
        width={30}
        fontSize={20}
        borderColor="white"
        borderWidth={2}
        borderRadius={5}
      />
    </View>
  );
}
const paginationStyles = StyleSheet.create({
  mainCon: {
    marginTop: 30,
    flexDirection: "row",
    gap: 10,
    width: "100%",
    justifyContent: "center",
  },
});
