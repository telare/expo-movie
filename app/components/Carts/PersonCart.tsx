import { Person } from "@/dataFetching.ts/APISlice";
import { Image, Text, View } from "react-native";
import { cartStyles } from "./MovieCart";
import Button from "../Button";
import { Link } from "expo-router";

export default function PersonCart({ id, name, profile_path }: Person) {
  return (
   
      <View style={cartStyles.mainCon}>
        <View style={cartStyles.imgCon}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${profile_path}`,
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
              {name}
            </Text>
          </Link>
        </View>
      </View>
    
  );
}
