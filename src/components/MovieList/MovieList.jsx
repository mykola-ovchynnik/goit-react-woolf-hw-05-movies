import { useLocation } from 'react-router-dom';
import { List, ListItem, MovieLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <ListItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </ListItem>
      ))}
    </List>
  );
};
