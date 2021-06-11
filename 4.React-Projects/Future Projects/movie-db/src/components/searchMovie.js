import React, { useState } from "react";
import MovieCard from "./movieCard";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_NOT_SECRET_CODE}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      console.log(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="button">Search</button>
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </form>
    </>
  );
}
