import { View } from "react-native";
import Search from "../components/Search";
import APIdata from "../components/Home/APIData";

export default function SearchResults(){
    return (
        <View>
            <Search/>
            <APIdata  content="nowMovies"/>
        </View>
    )
}