import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import MoviePreview from "./components/MoviePreview";
import "./App.css";

// defines the base URL for the OMDb API
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isLoadingApp, setIsLoadingApp] = useState(true);

  // fetches movie data and updates the movie list
  const searchMovie = async (result) => {
    setIsLoadingSearch(true);
    try {
      const response = await fetch(`${API_URL}&s=${result}`);
      const data = await response.json();
      console.log("API Response:", data);
      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoadingSearch(false);
    }
  };

  // display movies related to "Avatar" when the component first mounts
  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        await searchMovie("Avatar");
      } catch (error) {
        console.error("Error during app initialization:", error);
      } finally {
        setIsLoadingApp(false);
      }
    };

    fetchInitialMovies();
  }, []);

  return (
    <div className="app">
      <main className="app">
        <h2 className="text-red-600">Stardelite Movie Search App</h2>

        <section className="search">
          <input
            type="text"
            value={movieSearch}
            placeholder="Search for movies"
            onChange={(e) => setMovieSearch(e.target.value)}
          />
          <LuSearch
            className="icon"
            alt="search"
            onClick={() => searchMovie(movieSearch)}
          />
        </section>

        {/* Loading state during the app mount or search */}
        {isLoadingApp || isLoadingSearch ? (
          <div className="loader">LOADING...</div>
        ) : movies?.length > 0 ? (
          <div className="wrap">
            {movies.map((movie) => (
              <MoviePreview key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="no-movie">
            <h2>No Movies Found</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
