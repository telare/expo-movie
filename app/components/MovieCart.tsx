import { Movie } from "@/dataFetching.ts/APISlice";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { addToFavorite } from "@/supabaseConfig";

export default function Cart({
  id,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
  vote_count,
}: Movie) {
  

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
          <Button
            // func={() =>
            //   addToFavorite(, {
            //     id,
            //   })
            // }
            // image={
            //   ids.includes(id)
            //     ? require("../../assets/images/favoriteActive.png")
            //     : require("../../assets/images/favorite.png")
            // }
            width={30}
            height={35}
            backgroundColor={undefined}
            position="absolute"
            top={10}
            right={10}
          />
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
                vote_average >= 7 ? cartStyles.goodVote : cartStyles.badVote,
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
