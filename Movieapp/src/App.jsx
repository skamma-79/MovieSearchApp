import React from "react";
import { useEffect, useState } from "react";
import InputBox from "./Components/InputBox";
import MovieCard from "./Components/MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  // Start with true to show the loader while the first movies are loading.
  const [loading, setLoading] = useState(true);

  async function getmovies() {
    // Show the loader again whenever a new API request starts, including searches.
    setLoading(true);
    let Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

    if (query !== "") {
       Api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
    }

    try {
      let response = await fetch(Api);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      let data = await response.json();
      // Use an empty array if results is null or undefined.
      setMovies(data.results ?? []);
    } catch (error) {
      console.error("Could not load movies:", error);
      // Clear old movies if the API request fails.
      setMovies([]);
    } finally {
      // Always stop the loader, whether the request succeeds or fails.
      setLoading(false);
    }
  }

  useEffect(() => {
    getmovies();
  }, [query]);

  return (
    <>
      <InputBox setQuery={setQuery} query={query} />
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
          loading ?
            <div role="status" className="col-span-full flex items-center justify-center gap-3 py-16 text-white">
              <div aria-hidden="true" className="h-8 w-8 animate-spin rounded-full border-4 border-gray-600 border-t-white" />
              <span>Loading movies...</span>
            </div>
            : movies.length == 0 ?
            <h2 className="text-white">No Movies Found</h2>
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
