import React from "react";
import { useEffect, useState } from "react";
import InputBox from "./Components/InputBox";
import MovieCard from "./Components/MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  async function getmovies() {
    let Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

    if (query !== "") {
       Api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
    }

    let response = await fetch(Api);
    let data = await response.json();
    setMovies(data.results);
  }

  useEffect(() => {
    getmovies();
  }, [query]);

  return (
    <>
      <InputBox setQuery={setQuery} query={query} />
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
          movies.length == 0 ?
            <h2>No Movies Found</h2>
            :
            movies.map((movie, index) => {
              return (
                <MovieCard key={index} movie={movie} />
              )
            })
        }
      </div>
    </>
  )
}