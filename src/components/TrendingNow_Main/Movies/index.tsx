import React from "react";

const Movie = ({ movie, handleMovieClick }: any) => {
  return (
    <div
      key={movie?.id}
      className="h-[50vh] w-full rounded-md px-6"
      onClick={() => handleMovieClick(movie)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.original_title}
        className="rounded-md cursor-pointer object-cover"
      />
    </div>
  );
};

export default Movie;
