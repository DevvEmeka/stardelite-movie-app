import React from "react";

export default function MoviePreview({ movies }) {
  return (
    <div>
      <section className="movies">
        <div>
          <p>{movies.Year}</p>
        </div>
        <div>
          <img src={movies.Poster} alt={movies.Title} />
        </div>
        <div>
          <span>{movies.Type}</span>
          <h3>{movies.Title}</h3>
        </div>
      </section>
    </div>
  );
}
