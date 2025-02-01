import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Info from "../components/Details/Info";
import Rating from "../components/Details/Rating";
import { useSearchParams } from "expo-router/build/hooks";
import { createContext } from "react";
import Toast from "react-native-toast-message";
type Params = {
  type: string;
  id: number;
};
export const paramsContext = createContext<Params>({ type: "movie", id: 2222 });
export default function Details() {
  const params: URLSearchParams = useSearchParams();
  const type: string | null = params.get("type");
  const id: string | null = params.get("id");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <paramsContext.Provider
          value={{
            type: type ? type : "movie",
            id: parseInt(id ? id : "2222"),
          }}
        >
          <View style={detailsStyles.mainCon}>
            <View style={{ zIndex: 9999 }}>
              <Toast />
            </View>

            <Info />
            {type !== "person" && <Rating />}
          </View>
        </paramsContext.Provider>
      </ScrollView>
    </SafeAreaView>
  );
}
export const detailsStyles = StyleSheet.create({
  mainCon: {
    padding: 20,
    alignItems: "center",
  },
});
