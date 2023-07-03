import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export const getTrending = async () => {
  const { data } = axios.get(`/trending/get-trending?api_key=${KEY}`);
  return data;
};

export const searchMovies = async query => {
  const { data } = axios.get(
    `search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1 `
  );
  return data;
};

export const movieDetails = async movieID => {
  const { data } = axios.get(`movie/${movieID}?api_key=${KEY}&language=en-US'`);
  return data;
};

export const movieCredits = async movieID => {
  const { data } = axios.get(
    `movie/${movieID}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const movieReviews = async movieID => {
  const { data } = axios.get(
    `movie/${movieID}/reviews?api_key=${key}&language=en-US&page=1`
  );
  return data;
};
