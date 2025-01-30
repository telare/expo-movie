import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Slider from "../components/Slider";
import Search from "../components/Search";
import APIdata from "../components/APIData";
import { useState } from "react";
import { useGetTrendingQuery } from "@/dataFetching.ts/APISlice";
import ErrorComponent from "../components/Error";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import CategoriesPicker from "../components/CategoriesPicker";

export default function Home() {
  const images: string[] = [
    `https://image.tmdb.org/t/p/w500/b85bJfrTOSJ7M5Ox0yp4lxIxdG1.jpg`,
    `https://image.tmdb.org/t/p/w500/fYnEbgoNCxW9kL0IgOgtJb9JTBU.jpg`,
    `https://image.tmdb.org/t/p/w500/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg`,
  ];
  const [pickedCategory, setPickedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(0);
  function handleNextClick() {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
  }
  function handlePageClick(index: number) {
    setCurrentPage(index);
  }
  function handleBackClick() {
    setCurrentPage(currentPage !== 3 ? currentPage + 1 : 3);
  }
  const {
    data: movies,
    isLoading: isMoviesLoading,
    isError: moviesError,
  } = useGetTrendingQuery({
    page: currentPage,
    type: "movie",
  });
  const {
    data: tv,
    isLoading: isTvLoading,
    isError: tvError,
  } = useGetTrendingQuery({
    page: currentPage,
    type: "tv",
  });
  const {
    data: person,
    isLoading: isPersonLoading,
    isError: personError,
  } = useGetTrendingQuery({
    page: currentPage,
    type: "person",
  });

  if (moviesError || tvError || personError) {
    return (
      <ErrorComponent
        code={"500"}
        message="Error in fetching data, please try again."
      />
    );
  }
  if (isMoviesLoading || isTvLoading || isPersonLoading) return <Loading />;
  return (
    <SafeAreaView style={homeStyles.mainCon}>
      <ScrollView>
        <View style={homeStyles.ImgCarouselCon}>
          <Slider images={images} />
        </View>

        <Search />
        <View style={{ height: "3%", marginTop: "3%" }}>
          <CategoriesPicker
            pickedCategory={pickedCategory}
            setPickedCategory={setPickedCategory}
          />
        </View>
        <View style={{ marginBottom: 30 }}>
          <View>
            {movies && pickedCategory === "movie" && (
              <APIdata title="Movies" content={movies} />
            )}
            {person && pickedCategory === "person" && (
              <APIdata title="Person" content={person} />
            )}
            {tv && pickedCategory === "tv" && (
              <APIdata title="Tv" content={tv} />
            )}
            {movies && person && tv && pickedCategory === "all" && (
              <View>
                <APIdata title="Movies" content={movies} />
                <APIdata title="Person" content={person} />
                <APIdata title="Tv" content={tv} />
              </View>
            )}
          </View>
        </View>

        <Pagination
          totalPages={4}
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const homeStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: "black",
  },
  ImgCarouselCon: {
    marginTop: 20,
  },
});
