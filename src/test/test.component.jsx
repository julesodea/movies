import React, { Component } from 'react';
import FullList from '../components/full-list/full-list.component';
import './test.styles.scss';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = '407a626cc10a99287f2964816749416a';
const language = '&language=en-US';
const query = '&query=';

class Test extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      total_pages: null,
      page_num: 1,
      query: null,
      counter: 1,
      toggle: false,
    };
  }

  fetchMovies(search) {
    fetch(
      URL +
        `${API_KEY}` +
        language +
        query +
        search +
        `&page=` +
        this.state.counter
    )
      .then((response) => response.json())
      .then((results) =>
        this.setState({
          movies: results.results,
        })
      );
  }
  filterSearch = (event) => {
    let term = event.target.value;
    if (this.state.movies === undefined || []) {
      this.setState({ counter: 1 });
    }
    this.setState(
      {
        query: term,
        toggle: true,
      },

      () => this.fetchMovies(this.state.query)
    );
  };

  increase = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => this.fetchMovies(this.state.query)
    );
  };
  decrease = () => {
    if (this.state.movies && this.state.counter !== 1) {
      this.setState(
        {
          counter: this.state.counter - 1,
        },
        () => this.fetchMovies(this.state.query)
      );
    }
  };

  render() {
    let toggleActive = this.state.movies === undefined ? 'add-toggle' : '';
    let toggleActiveReset = this.state.toggle === false ? 'add-toggle' : '';
    return (
      <div>
        <div>
          <input placeholder='Search Movie ..' onChange={this.filterSearch} />
          <div className='button-container'>
            <div className={' ' + toggleActive + toggleActiveReset}>
              {this.state.counter === 1 ? (
                ''
              ) : (
                <button
                  onClick={this.decrease}
                  style={{
                    marginLeft: '0%',
                    marginTop: '20px',
                    marginBottom: '20px',
                    marginRight: '10px',
                  }}
                >
                  PREVIOUS PAGE
                </button>
              )}
              <button
                onClick={this.increase}
                style={{
                  marginLeft: '0%',
                  marginTop: '20px',
                  marginBottom: '20px',
                  marginRight: '10px',
                }}
              >
                NEXT PAGE
              </button>
              <div>Page: {this.state.counter}</div>
            </div>
          </div>
        </div>
        <div className='grid-container'>
          {this.state.movies
            ? this.state.movies.map((movie) => (
                <FullList key={movie.id} movie={movie} />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Test;
