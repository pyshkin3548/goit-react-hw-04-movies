import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import routes from '../routes'
import  API from "../services/api";
import styles from './MoviesDetailsPage.module.css';
import Cast from './Cast'
import Reviews from './Reviews'

export default class MoviesDetailsPage extends Component {

state = {
    movie: {
      genres: [],
    },
  };

  componentDidMount() {
    API
      .fetchMovieDetails(this.props.match.params.movieId)
      // .then(console.log(this.props.match.params))
        .then((movie) => this.setState({ movie }))

  }



  handleGoBack = (e) => {
    console.log("back!!!");
    this.props.history.push("/movies");

    const { state } = this.props.location;

    if (state && state.from) {
    // if (state) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.home)
  };

  render() {
    const {
        id,
        title,
        poster_path,
        vote_average,
        overview,
        release_date,
        genres,
      } = this.state.movie;
      const { match } = this.props;

    let releaseYear = '';
    if (!!release_date) {
      releaseYear = release_date.substring(0, 4);
    }
    return (
      <div>
        <button type="button" className={styles.backBtn} onClick={this.handleGoBack}>
          Back to show list
        </button>
        <br />
<section className={styles.About}>
          {!!poster_path && this.state.movie &&(
            <img
              className={styles.Img}
              src={API.posterimgpath + poster_path}
              alt={title}
            />
          )}
          <section>
            <h1>
              {title} ({releaseYear})
            </h1>
            <p>User score: {vote_average} </p>
            <p className={styles.bold}>Overwiew</p>
            <p>{overview}</p>
            <p className={styles.bold}>Genres</p>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </section>
          </section>

          <section className={styles.addInfoSection}>
          <p className={styles.bold}>Additional information</p>
          <Link
            className={styles.addInfo}
            to={{ pathname: `/movies/${id}/cast`}}
            // to={{ pathname: `${match.path}/cast`}}
          >
            Cast
          </Link>
          <Link
            className={styles.addInfo}
            to={{ pathname: `/movies/${id}/reviews` }}
          >
            Reviews
          </Link>
        </section>
        <Switch> 
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} /> 
  </Switch>
      </div>
    );
  }
}
