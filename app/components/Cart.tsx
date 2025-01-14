import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MovieCart = {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
  type: "movie" | "person";
};

export default function Cart({
  title,
  poster_path,
  vote_average,
  id,
  type,
}: MovieCart) {
  return (
    <View>
      {type == "movie" ? (
        <View style={cartStyles.mainCon}>
          <View style={cartStyles.imgCon}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
              style={cartStyles.img}
            />
          </View>
          <View style={cartStyles.textCon}>
            <Link
              href={{
                pathname: "/screens/details",
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
                    : vote_average <= 5
                    ? cartStyles.normVote
                    : cartStyles.badVote,
                ]}
              >
                {vote_average.toPrecision(2)}
              </Text>
            </Text>
          </View>
        </View>
      ) : (
        <View style={cartStyles.mainCon}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
            style={cartStyles.img}
          />
          <TouchableOpacity>
            <Text style={cartStyles.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      )}
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
  imgCon: {
    alignItems: "center",
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
    fontWeight: "300",
  },
  goodVote: {
    color: "green",
  },
  normVote: {
    color: "yellow",
  },
  badVote: {
    color: "red",
  },
});
