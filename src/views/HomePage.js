import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import API from "../services/api";

export default class HomePage extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = { trending: [] };

  componentDidMount() {
    API.fetchTrandingMovies().then((movies) => {
      this.setState({
        trending: movies,
      });
    });
  }

  render() {
    const { trending } = this.state;
    const { location } = this.props;
    return (
      <div>
        <h1>Trending movies</h1>
        <ul>
          {trending.map((movie) => (
            <li key={movie.id}>
              {/* <Link to={{ pathname: `/movies/${movie.id}` }}> */}
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
