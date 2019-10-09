import React from 'react';
import './full-list.styles.scss';

const FullList = props => (
  <div className="container full-movie-list-container">
    <img
      onError={e => {
        e.target.onerror = null;
        e.target.src =
          'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png';
      }}
      alt={props.movie.backdrop_path}
      style={{ borderRadius: '10px' }}
      src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
    />
    <strong>{props.movie.title}</strong>
    <br />
    <strong>Released: </strong> {props.movie.release_date} <br />
    <strong>Popularity: </strong> {props.movie.vote_average}
    <p>{props.movie.overview}</p>
  </div>
);

export default FullList;
