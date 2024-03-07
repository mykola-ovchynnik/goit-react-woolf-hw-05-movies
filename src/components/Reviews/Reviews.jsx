import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewItem } from './ReviewItem/ReviewItem';
import { fetchReviews } from 'service/movie-service';
import { ReviewsList } from './Reviews.styled';
import { AdditionalInfoHeader } from 'components/MovieDetails/MovieDetails.styled';

const Reviews = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchReviews(movieID)
      .then(({ results }) => {
        setMovie(results);
      })
      .catch(error => console.error(error));
  }, [movieID]);

  if (!movie) {
    return;
  }

  return (
    <div>
      <AdditionalInfoHeader>Reviews</AdditionalInfoHeader>
      <ReviewsList>
        {movie.length > 0 ? (
          movie.map(({ author, content, id }) => (
            <ReviewItem author={author} content={content} key={id} />
          ))
        ) : (
          <p>There are no reviews for this movie yet.</p>
        )}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
