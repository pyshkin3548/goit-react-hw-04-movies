const baseURL = "https://api.themoviedb.org/3";
const APIkey = "api_key=407003d6edf218a06e4ad4e45c54097f";

const fetchMovieDetails = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}?${APIkey}`).then((res) =>
    res.json()
  );
};

const fetchTrandingMovies = () => {
  return fetch(`${baseURL}/trending/movie/day?${APIkey}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMovieWithQuery = (searchQuery) => {
  return (
    fetch(`${baseURL}/search/movie?${APIkey}&query=${searchQuery}`)
      .then((res) => res.json())
      // .then(entries => entries.results.map());
      .then((entries) => entries.results.map((entry) => entry))
  );
};

const fetchMovieCredits = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/credits?${APIkey}`).then((res) =>
    res.json()
  );
};

const fetchMovieReviews = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/reviews?${APIkey}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

export const imgpath = "https://image.tmdb.org/t/p/w185";
export const posterimgpath = `https://image.tmdb.org/t/p/w342`;

export default {
  fetchMovieDetails,
  fetchMovieWithQuery,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchTrandingMovies,
  posterimgpath,
  imgpath,
};
