import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import MoviePreview from "./components/MoviePreview";
import './App.css'

// defines the base URL for the OMDb API
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('')

  // fetche movie data and updates the movie list 
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
        setMovies([]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMovies([]); 
    }
  };

  // display movies related to "Avatar" when the component first mounts
  useEffect(() => {
    searchMovie("Avatar");
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

        {/* conditionally renders a list of movies using the MoviePreview component */}
        {movies?.length > 0 ? (
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
