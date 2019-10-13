import React, { Component } from 'react';

import { MovieList } from './components/movie-list/movie-list.component';

import Logo from './img/logo.png';
import './App.css';
import Test from './test/test.component';
import Tailwind from './tailwind/tailwind.component';
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: '',
      page: '2'
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(results => this.setState({ movies: results.results }));
  }

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <nav
          style={{
            display: `flex`,
            justifyContent: `space-around`,
            alignItems: `center`
          }}
        >
          <img src={Logo} className="h-40" alt="imagemovie" />
        </nav>
        <Tailwind />
        <Test />

        {/* <input
          type="search"
          placeholder="Search Here"
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}

        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;
