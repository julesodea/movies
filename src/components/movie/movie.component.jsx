import React from "react";
import "./movie.styles.scss";
import Toggle from "../toggle/Togglerpc";
import Modal from "../modal/modal";
import { Spring } from "react-spring/renderprops";

export const Movie = props => {
  return (
    <div>
      <Toggle>
        {({ on, toggle }) => (
          <div
            onClick={toggle}
            className="movie-container"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`
            }}
          >
            <div className="overlay">
              <h1 className="movie-title">{props.movie.title}</h1>
              <p className="movie-vote">
                {props.movie.vote_average}{" "}
                <span className="small">({props.movie.vote_count} Votes)</span>
              </p>
              <p className="movie-release">{props.movie.release_date}</p>
            </div>

            <Modal on={on} toggle={toggle}>
              <Spring delay={100} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props1 => (
                  <div style={props1}>
                    <div className="movie-modal">
                      <img
                        className="movie-image"
                        src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
                        alt=""
                      />
                      <div>
                        <h1 className="movie-title">{props.movie.title}</h1>
                        <p className="movie-release">
                          {props.movie.release_date}
                        </p>
                        <p className="movie-vote">
                          {props.movie.vote_average}/10{" "}
                          <span className="votes">
                            {props.movie.vote_count} votes
                          </span>
                        </p>

                        <p className="movie-overview">{props.movie.overview}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Spring>
            </Modal>
          </div>
        )}
      </Toggle>
    </div>
  );
};
