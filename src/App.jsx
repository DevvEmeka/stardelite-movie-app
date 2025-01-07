import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import MoviePreview from "./components/MoviePreview";
import './App.css'

// Defining the movie API
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a4c0a4fb";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('')

  // const searchMovie = async (result) => {
  //   const response = await fetch(`${API_URL}&s=${result}`);
  //   const data = await response.json();

  //   setMovies(data.Search);
  // };

  const searchMovie = async (result) => {
    try {
      const response = await fetch(`${API_URL}&s=${result}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      
      // Check if there is a 'Search' property and it's an array
      if (data.Search) {
        setMovies(data.Search);
      } else {
        console.error('No movies found');
        setMovies([]); // If no movies are found, clear the movies state
      }
    } catch (error) {
      console.error('Error:', error);
      setMovies([]); // Clear movies if there's an error
    }
  };

  useEffect(() => {
    searchMovie("Avatar");
  }, []);   

  const searchIcon = <LuSearch />;
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
            className="pointer"
            alt="search"
            onClick={() => searchMovie(movieSearch)}
          />
        </section>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MoviePreview key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
