import { Movie, Person } from "@/dataFetching.ts/APISlice";
import { userStore } from "@/store/userStore";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cart({
  id,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
  vote_count,
}: Movie) {
  const userFavorite = userStore().favorite.movies;
  const addToFavorite: (by: Movie) => void = userStore().setFavorite;
  const ids: number[] = userFavorite.map((favorite) => favorite.id);
  
  
  return (
    <View>
      <View style={cartStyles.mainCon}>
        <View style={cartStyles.imgCon}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
            }}
            style={cartStyles.img}
          />
          <TouchableOpacity
            style={cartStyles.favoriteBtn}
            
            onPress={() =>
              addToFavorite({
                id,
                overview,
                poster_path,
                release_date,
                title,
                vote_average,
                vote_count,
              })
            }
          >
            {ids.includes(id) ? (
              <Image
                source={require("../../assets/images/favoriteActive.png")}
                style={{ width: 30, height: 35 }}
              />
            ) : (
              <Image
                source={require("../../assets/images/favorite.png")}
                style={{ width: 30, height: 35 }}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={cartStyles.textCon}>
          <Link
            href={{
              pathname: "/(tabs)/details",
              params: { id: id },
            }}
          >
            <Text style={cartStyles.title} numberOfLines={2}>
              {title}
            </Text>
          </Link>
          <Text style={{ color: "black" }}>
            Average vote:{" "}
            <Text
              style={[
                cartStyles.vote,
                 vote_average >= 7 
                  ? cartStyles.goodVote
                  : cartStyles.badVote,
              ]}
            >
              {vote_average.toPrecision(2)}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
const cartStyles = StyleSheet.create({
  mainCon: {
    width: 160,
    height: 250,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "rgba(255, 255, 255, 1)",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.67,
    shadowRadius: 23,
    elevation: 22,
  },
  img: {
    width: 160,
    height: 160,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
  },
  favoriteBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  imgCon: {
    alignItems: "center",
    position: "relative",
  },
  textCon: {
    width: 160,
    paddingLeft: 10,
  },
  title: {
    color: "black",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 20,
    fontWeight: "500",
  },
  vote: {
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 15,
    fontWeight: "500",
  },
  goodVote: {
    color: "green",
  },

  badVote: {
    color: "red",
  },
});
