import { useGetPopularPersonQuery } from "@/dataFetching.ts/APISlice";
import { Text, View } from "react-native";
import Loading from "../../Loading";

export default function PopularPersons() {
  const { data: persons, isLoading, isError } = useGetPopularPersonQuery("US");
  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      {persons ? (
        persons.results.map((person,i) => <View key={i}>{person.id}</View>)
      ) : (
        <View><Text>No data</Text></View>
      )}
    </View>
  );
}
