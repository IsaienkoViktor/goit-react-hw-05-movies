import { getTrending } from 'Services/api';
import FilmsList from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <FilmsList movies={movies} />
    </>
  );
};

export default Home;
