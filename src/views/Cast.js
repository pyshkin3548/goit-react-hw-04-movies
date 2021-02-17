import React, { Component } from "react";
// import routes from "../routes";
import API from "../services/api";
import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    credits: { crew: [], cast: [] },
  };

  componentDidMount() {
    // console.log(movieId)
    API.fetchMovieCredits(this.props.match.params.movieId)
      .then(console.log(this.props.match.params))
      .then(credits => {
        this.setState({
           credits
        });
      })
      // .then((credits) => this.setState({ credits: credits }));
  }
  render() {
    const { credits } = this.state;

    return (
      <div>
        <h2 className={styles.Name}>Cast</h2>

        <ul>
          {credits &&
            credits.cast &&
            credits.cast.map(member => (
              <li className={styles.list} key={member.credit_id}>
                {member.profile_path && (
                  <img
                    src={API.imgpath + member.profile_path}
                    alt={member.name}
                  />
                )}
                <p>{member.name}</p>
                <p>Character: {member.character}</p>
              </li>
            ))}
        </ul>
        <h2>Crew</h2>
        <ul>
          {credits &&
            credits.crew &&
            credits.crew.map(member => (
              <li key={member.credit_id}>
                {member.profile_path && (
                  <img
                    src={API.imgpath + member.profile_path}
                    alt={member.name}
                  />
                )}
                <p>{member.name}</p>
                <p>Job: {member.job}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}


