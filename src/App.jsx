import { useEffect } from "react";

// a4c0a4fb

// Defining the movie API
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a4c0a4fb";

function App() {
  const searchMovie = async (result) => {
    const response = await fetch(`${API_URL}&s=${result}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);
  return <>App</>;
}

export default App;
