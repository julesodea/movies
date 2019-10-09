import React from 'react';
import './movie.styles.scss';

export const Movie = props => (
  <div className="movie-container">
    <img
      src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
      alt="movie"
    />
    <p className="font-thin text-sm">
      Rating: {props.movie.vote_average} ({props.movie.vote_count} Voted)
    </p>
    <h1 className="text-2xl font-bold">{props.movie.title}</h1>

    <p>{props.movie.overview}</p>
  </div>
);
