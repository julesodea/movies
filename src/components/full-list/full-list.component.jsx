import React from 'react';
import './full-list.styles.scss';
import Toggle from '../toggle/Togglerpc';
import Modal from '../modal/modal';
import Trailer from '../trailer/trailer';

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
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <button className="more" onClick={toggle}>
            More
          </button>
          <Modal on={on} toggle={toggle}>
            <div className="movie-modal">
              <div
                className="image"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${props.movie.backdrop_path})`
                }}
              />
              <div>
                <h1>{props.movie.title}</h1>
                <p>{props.movie.release_date}</p>
                <p>{props.movie.vote_average}/10</p>
                <p>{props.movie.vote_count}</p>
                <p>{props.movie.overview}</p>
              </div>
            </div>
            <Trailer id={props.movie.id} />
          </Modal>
        </div>
      )}
    </Toggle>
  </div>
);

export default FullList;
