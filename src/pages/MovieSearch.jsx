import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'service/movie-service';
import { Container, PageHeader, Section } from 'styles/GlobalStyles';

export const MovieSearch = () => {
  const [search, setSearchParams] = useSearchParams();
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchQuery = search.get('query');
    if (!searchQuery) return;

    setLoading(true);
    fetchSearchMovie(searchQuery)
      .then(setmovies)
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [search]);

  const onMovieSelect = query => {
    setSearchParams({ query });
  };
  return (
    <Section>
      <Container>
        <PageHeader>Search for a movie...</PageHeader>
        <SearchForm onMovieSelect={onMovieSelect} />
        <MovieList movies={movies} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
