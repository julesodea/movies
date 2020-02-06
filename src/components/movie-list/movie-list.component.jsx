import React from "react";
import { Movie } from "../movie/movie.component";
import "./movie-list.styles.scss";

export const MovieList = props => {
  return (
    <div className="">
      <h2
        className="page-title"
        style={{
          marginTop: "20px",
          marginBottom: "40px"
        }}
      >
        New Releases
      </h2>
      <div className="movie-list">
        {props.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
