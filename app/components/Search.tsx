import { StyleSheet, TextInput, View } from "react-native";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import { useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import Button from "./Button";
type Search = {
  input: string;
};

export default function Search() {
  const router = useRouter();
  const params = useSearchParams();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Search>();

  function sumbitInput(data: Search) {
   
    // if (data.input.includes(" ")) {
    //   data.input = data.input.replaceAll(" ", "%20");
    // }
    router.push({
      pathname: "/(tabs)/search_results",
      params: { query: encodeURIComponent(data.input) },
    });
  }
  return (
    <View style={searchStyles.mainCon}>
      <View style={searchStyles.inputCon}> 

      
      <TextInput
        placeholder="Search by title ..."
        placeholderTextColor="gray"
        defaultValue={
          params.get("query") ? (params.get("query") as string) : undefined
        }
        style={
          errors.input
            ? [searchStyles.input, searchStyles.error]
            : searchStyles.input
        }
        {...register("input", {
          minLength: { value: 2, message: "At least 2 symbols" },
        })}
        onChangeText={(inputValue) => setValue("input", inputValue)}
      />
      <Button
        image={require("../../assets/images/search.png")}
        width={50}
        height={50}
        func={handleSubmit(sumbitInput)}
        position="absolute"
        top={0}
        left={0}
      />
      </View>
      {errors.input && (
        <Text
          style={{
            fontFamily: "Inter_24pt-Regular.ttf",
            fontSize: 18,
            fontWeight: "500",
            color: "red",
          }}
        >
          {errors.input.message}
        </Text>
      )}
    </View>
  );
}
const searchStyles = StyleSheet.create({
  mainCon: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  inputCon:{
    width:"85%",
    justifyContent:"flex-start",
  },
  input: {
    height: 50,
    backgroundColor: "#211F30",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 47,
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 18,
    color: "#BBBBBB",
    fontWeight: "500",
  },
  error: {
    borderColor: "red",
    borderWidth: 2,
    color: "red",
  },

  searchIcon: {
    width: 50,
    height: 50,
  },
});
