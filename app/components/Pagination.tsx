
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handleNextClick: () => void;
  handlePageClick: (i: number)=>void;
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
      <TouchableOpacity style={paginationStyles.btn} onPress={handleNextClick}>
        <Text style={paginationStyles.text}>{"<"}</Text>
      </TouchableOpacity>
      {Array(totalPages)
        .fill("")
        .map((_, index) => (
          <TouchableOpacity
            key={index}
            style={
              currentPage === index
                ? [paginationStyles.btn, paginationStyles.currentBtn]
                : paginationStyles.btn
            }
            onPress={()=>handlePageClick(index)}
          >
            <Text
              style={
                currentPage === index
                  ? [paginationStyles.text, paginationStyles.currentText]
                  : paginationStyles.text
              }
            >
              {index}
            </Text>
          </TouchableOpacity>
        ))}
      <TouchableOpacity style={paginationStyles.btn} onPress={handleBackClick}>
        <Text style={paginationStyles.text}>{">"}</Text>
      </TouchableOpacity>
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
  btn: {
    borderWidth: 2,
    borderColor: "white",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontWeight: "600",
  },
  currentText: {
    color: "white",
    fontSize:20, 
    fontWeight: "600",
  },
  currentBtn: {
    backgroundColor: "#432c8a",
    borderColor:"#432c8a",
    borderWidth:4,
    width: 35,
    height: 35,
  },
});
