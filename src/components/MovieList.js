import React from 'react';
import MovieCard from './MovieCard';
import "./movielist.css";


const MovieList = ({title,movies}) => {
    console.log(title);
  return (
    <div className="px-6  ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className=" flex overflow-y-hidden  overflow-x-auto scrollbar-hide ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
