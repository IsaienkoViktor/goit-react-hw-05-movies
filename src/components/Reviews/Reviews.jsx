import { getReviewsMovie } from 'Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem, ReviewsDescr, StyledList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const ReviewsFilms = await getReviewsMovie(movieId);
        setReviews(ReviewsFilms);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  const noReview = reviews.length === 0;

  return noReview ? (
    <h3>No Reviews.</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default Reviews;

// reviews.length === 0 ? (
//     <h3>No Reviews.</h3>
//   ) :
