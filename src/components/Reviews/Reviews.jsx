import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewItem } from './ReviewItem/ReviewItem';
import { fetchReviews } from 'service/movie-service';
import { ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchReviews(movieID)
      .then(({ results }) => {
        setMovie(results);
      })
      .catch(error => console.error(error))
      .finally(setLoading(false));
  }, [movieID]);

  if (!movie) {
    return;
  }

  return (
    <ReviewsList>
      {movie.length > 0 ? (
        movie.map(({ author, content, id }) => (
          <ReviewItem author={author} content={content} key={id} />
        ))
      ) : (
        <p>There are no reviews for this movie yet.</p>
      )}
    </ReviewsList>
  );
};
