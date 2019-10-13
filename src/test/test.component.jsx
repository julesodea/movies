import React, { Component } from 'react';
import FullList from '../components/full-list/full-list.component';
import './test.styles.scss';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = process.env.REACT_APP_API_KEY;
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
      toggle: false
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
      .then(response => response.json())
      .then(results =>
        this.setState({
          movies: results.results
        })
      );
  }
  filterSearch = event => {
    let term = event.target.value;
    if (this.state.movies === undefined || []) {
      this.setState({ counter: 1 });
    }
    this.setState(
      {
        query: term,
        toggle: true
      },

      () => this.fetchMovies(this.state.query)
    );
  };

  increase = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => this.fetchMovies(this.state.query)
    );
  };
  decrease = () => {
    if (this.state.movies && this.state.counter !== 1) {
      this.setState(
        {
          counter: this.state.counter - 1
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
          <h1>Search All Movies</h1>
        </div>
        <div>
          <input placeholder="Search by Title" onChange={this.filterSearch} />
          <div className="button-container">
            <div className={' ' + toggleActive + toggleActiveReset}>
              <button onClick={this.decrease} style={{ marginLeft: '0%' }}>
                PREVIOUS PAGE
              </button>
              <button onClick={this.increase} style={{ marginLeft: '0%' }}>
                NEXT PAGE
              </button>
            </div>
          </div>
        </div>
        <div className="grid-container">
          {this.state.movies
            ? this.state.movies.map(movie => (
                <FullList key={movie.id} movie={movie} />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Test;
