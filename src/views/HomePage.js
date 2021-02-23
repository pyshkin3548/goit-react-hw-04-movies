import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

export default class HomePage extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = { trending: [] };

  componentDidMount() {
    API.fetchTrandingMovies().then(movies => {
      this.setState({
        trending: movies,
      });
    });
  }

  render() {
    const { trending } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h1>Trending movies</h1>
        <ul>
          {trending.map(movie => (
            <li key={movie.id}>
              {/* <Link to={{ pathname: `/movies/${movie.id}` }}> */}
              <Link to={`${match.url}movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}