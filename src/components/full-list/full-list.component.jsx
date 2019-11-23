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
    <strong style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
      {props.movie.title}
    </strong>

    <Toggle>
      {({ on, toggle }) => (
        <div>
          <div
            style={{ color: 'red', fontWeight: '600' }}
            className="more"
            onClick={toggle}
          >
            Movie Details
          </div>
          <Modal on={on} toggle={toggle}>
            <div className="movie-modal">
              <div
                className="image"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${props.movie.backdrop_path})`
                }}
              />
              <div>
                <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                  {props.movie.title}
                </h1>
                <p style={{ fontWeight: '400', fontSize: '14px' }}>
                  {props.movie.release_date}
                </p>
                <p
                  style={{ fontWeight: 'bold', fontSize: '12px', color: 'red' }}
                >
                  {props.movie.vote_average}/10
                </p>
                <p style={{ fontWeight: '400', fontSize: '10px' }}>
                  {props.movie.vote_count} votes
                </p>
                <p style={{ fontWeight: '400', fontSize: '1rem' }}>
                  {props.movie.overview}
                </p>
              </div>
            </div>
            {/* <Trailer id={props.movie.id} /> */}
          </Modal>
        </div>
      )}
    </Toggle>
  </div>
);

export default FullList;
