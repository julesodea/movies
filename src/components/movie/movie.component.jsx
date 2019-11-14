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
        <p className="font-thin text-sm">
          Rating: {props.movie.vote_average} ({props.movie.vote_count} Voted)
        </p>
        <p className="movie-overview">{props.movie.release_date}</p>
        <h1 className="text-2xl font-bold">{props.movie.title}</h1>
      </div>

      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Info</button>
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
                </div>
              </div>
              <Trailer id={props.movie.id} />
            </Modal>
          </div>
        )}
      </Toggle>
    </div>
  );
};
