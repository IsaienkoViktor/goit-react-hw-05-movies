import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};

export const movieDetails = async movieID => {
  const { data } = await axios.get(
    `movie/${movieID}?api_key=${API_KEY}&language=en-US'`
  );
  return data;
};

export const movieCredits = async movieID => {
  const { data } = await axios.get(
    `movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const movieReviews = async movieID => {
  const { data } = await axios.get(
    `movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
