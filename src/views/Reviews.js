import React, { Component } from "react";
import API from "../services/api";
import styles from "./Reviews.module.css";

export default class Review extends Component {
  state = { reviews: [] };

  componentDidMount() {
    API.fetchMovieReviews(this.props.match.params.movieId).then((reviews) => {
      this.setState({
        reviews,
      });
    });
  }
  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length > 0 ? 
          <ul>
            {reviews.map((review) => (
              <li className={styles.ListItem} key={review.id}>
                <p className={styles.Author}>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
         : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}
