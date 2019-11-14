import React, { Component } from 'react';

export default class Trailer extends Component {
  constructor() {
    super();

    this.state = {
      trailers: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=407a626cc10a99287f2964816749416a&language=en-US`
    )
      .then(response => response.json())
      .then(users => this.setState({ trailers: users.results }));
  }
  render() {
    return (
      <div>
        {this.state.trailers.map(trailer => (
          <h1 key={trailer.id}>
            <div>
              <a
                target="__blank"
                href={`https://youtube.com/watch?v=${trailer.key}`}
              >
                {trailer.name}
              </a>
              <div
                className="video"
                style={{
                  position: 'relative',
                  paddingBottom: '40.25%' /* 16:9 */,
                  paddingTop: 25,
                  height: 0
                }}
              >
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '640px',
                    height: '360px'
                  }}
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  frameBorder="0"
                />
              </div>
            </div>
          </h1>
        ))}
      </div>
    );
  }
}
