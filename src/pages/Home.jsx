import { useEffect, useState } from 'react';
import { getMovies } from 'service/movie-service';
import { MovieList } from 'components/MovieList/MovieList';
import { Container, PageHeader, Section } from 'styles/GlobalStyles';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovies()
      .then(setMovies)
      .catch(e => setError(e.message))
      .finally(setLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        <PageHeader>Today trending movies:</PageHeader>
        {movies && <MovieList movies={movies} />}
        {loading && <Loader />}
        {error && <h2>{error}</h2>}
      </Container>
    </Section>
  );
};
