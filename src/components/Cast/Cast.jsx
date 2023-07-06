import { ListItem, StyledList } from 'Pages/MoviesDetails.module.jsx';
import { getMovieCast } from 'Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import { StyledWrapper } from './Cast.module';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <StyledWrapper>
          <StyledList>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <ListItem key={id}>
                <img
                  src={`${
                    profile_path
                      ? BASE_POSTER_URL + profile_path
                      : PLACEHOLDER + '?text=' + original_name
                  }`}
                  alt={original_name}
                  width={'150px'}
                />
                <p>
                  <span> Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </ListItem>
            ))}
          </StyledList>
        </StyledWrapper>
      }
    </>
  );
};

export default Cast;
