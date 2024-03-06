import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'service/movie-service';
import { Container, LinkButton, Section } from 'styles/GlobalStyles';

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { movieID } = useParams();

  useEffect(() => {
    if (!movieID) return;

    setLoading(true);
    fetchMovie(movieID)
      .then(setMovie)
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [movieID]);

  return (
    <Section>
      <Container>
        <LinkButton to={location.state?.from ?? '/'}>{'<- Go Back'}</LinkButton>
        {movie && <MovieDetails {...movie} />}
        {loading && <Loader />}
        {error && <h2>{error}</h2>}
      </Container>
    </Section>
  );
};
