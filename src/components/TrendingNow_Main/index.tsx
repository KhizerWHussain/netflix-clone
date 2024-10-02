"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fetchTrendingMovies } from "../../../Helper/callapi";
import Movie from "./Movies";
import MovieModal from "./MovieModal";
import { sliderSettingsTrending } from "./settings";

const TrendingNow_Main = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovies = async () => {
    try {
      const data = await fetchTrendingMovies();
      console.log("data =>", data);
      setMovies(data?.data?.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="mt-12 mb-12 h-screen w-screen overflow-hidden justify-center align-middle items-center flex flex-col pr-4 pl-4 md:pr-32 md:pl-32">
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-start mb-6">
          <h1 className="text-2xl">Trending Now</h1>
        </div>
        <div className="w-full h-full">
          <Slider {...sliderSettingsTrending}>
            {movies?.map((movie: any, i: number) => (
              <Movie
                movie={movie}
                key={i}
                handleMovieClick={handleMovieClick}
              />
            ))}
          </Slider>
        </div>
      </div>

      {selectedMovie ? (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      ) : null}
    </div>
  );
};

export default TrendingNow_Main;
