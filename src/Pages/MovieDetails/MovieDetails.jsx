import { getMovieById } from 'Services/api';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import {
  FilmDescr,
  FilmImg,
  FilmSubTitle,
  FilmTitle,
  FilmWrapper,
  GoBackLink,
  ListItem,
  StyledList,
  StyledListDescr,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  if (!movie) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <GoBackLink>
        <Link to={backLinkHref}>
          Go back<span></span>
        </Link>
      </GoBackLink>
      <FilmWrapper>
        <FilmImg
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt="get"
        />
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescr>{movie.overview}</FilmDescr>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDescr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDescr>
        </div>
      </FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast<span></span>
            </NavLink>
          </ListItem>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews<span></span>
            </NavLink>
          </li>
        </StyledList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
