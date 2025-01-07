import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import MoviePreview from "./components/MoviePreview";

// a4c0a4fb

// Defining the movie API
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a4c0a4fb";

const movies = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('')

  const searchMovie = async (result) => {
    const response = await fetch(`${API_URL}&s=${result}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);

  const searchIcon = <LuSearch />;
  return (
    <>
      <main className="app">
        <h2 className="text-red-600">Stardelite Movie Search App</h2>

        <section className="search">
          <input
            type="text"
            value="movieSearch"
            placeholder="Search for movies"
            onChange={(e) => setMovieSearch(e.target.value)}
          />
          <LuSearch
            className="pointer"
            alt="search"
            onClick={(movieSearch) => findMovies()}
          />
        </section>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MoviePreview key={movie.imdbID} movies={movies} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
