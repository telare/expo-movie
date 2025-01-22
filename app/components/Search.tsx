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
    console.log(data);
    if (data.input.includes(" ")) {
      data.input = data.input.replaceAll(" ", "%20");
    }
    router.push({
      pathname: "/(tabs)/search_results",
      params: { query: data.input },
    });
  }
  return (
    <View style={searchStyles.mainCon}>
      <View style={searchStyles.inputCon}>
        <TextInput
          placeholder="Search movies by title ..."
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
    alignItems: "center",
    marginTop: 20,
  },
  inputCon: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 13,
    padding: 10,
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 18,
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
