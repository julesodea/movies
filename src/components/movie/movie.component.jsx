import React, { useState } from 'react';
import './movie.styles.scss';
import Toggle from '../toggle/Togglerpc';
import Modal from '../modal/modal';
import Trailer from '../trailer/trailer';

export const Movie = props => {
  return (
    <div className="movie-container">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
          alt="movie"
        />
        <h1 className="movie-title">{props.movie.title}</h1>
        <p className="movie-vote">
          Rating: {props.movie.vote_average} ({props.movie.vote_count} Voted)
        </p>
        <p className="movie-release">{props.movie.release_date}</p>
      </div>

      <Toggle>
        {({ on, toggle }) => (
          <div>
            <div className="movie-details" onClick={toggle}>
              Movie Details
            </div>
            <Modal on={on} toggle={toggle}>
              <div className="movie-modal">
                <img
                  className="movie-image"
                  src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
                  alt=""
                />
                <div>
                  <h1 className="movie-title">{props.movie.title}</h1>
                  <p className="movie-release">{props.movie.release_date}</p>
                  <p className="movie-vote">
                    {props.movie.vote_average}/10{' '}
                    <span className="votes">
                      {props.movie.vote_count} votes
                    </span>
                  </p>

                  <p className="movie-overview">{props.movie.overview}</p>
                </div>
              </div>
              {/* <Trailer id={props.movie.id} /> */}
            </Modal>
          </div>
        )}
      </Toggle>
    </div>
  );
};
