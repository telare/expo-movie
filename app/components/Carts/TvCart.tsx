import { Link } from "expo-router";
import { Image, Text } from "react-native";
import { View } from "react-native";
import Button from "../Button";
import { Tv } from "@/dataFetching.ts/APISlice";
import { cartStyles } from "./MovieCart";
import { addToFavorite } from "@/supabaseConfig";

export default function TvCart({
  id,
  name,
  poster_path,
  vote_average,
  nickname,
}: Tv & {
  nickname: string;
}) {
  return (
    <View style={cartStyles.mainCon}>
      <View style={cartStyles.imgCon}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={cartStyles.img}
        />
        <Button
          func={() =>
            addToFavorite(nickname, {
              id: id,
              type: "tv",
            })
          }
          // image={
          //   ids.includes(id)
          //     ? require("../../assets/images/favoriteActive.png")
          //     : require("../../assets/images/favorite.png")
          // }

          width={30}
          height={35}
          backgroundColor="black"
          position="absolute"
          top={10}
          right={10}
        />
      </View>

      <View style={cartStyles.textCon}>
        <Link
          href={{
            pathname: "/(tabs)/details",
            params: { type: "tv", id: id },
          }}
        >
          <Text style={cartStyles.title} numberOfLines={2}>
            {name}
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
  );
}
