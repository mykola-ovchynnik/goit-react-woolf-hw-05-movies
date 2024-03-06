import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/movie-service';
import { CastItem } from './CastItem.jsx/CastItem';
import { CastList } from './Cast.styled';

export const Cast = () => {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchCast(movieID)
      .then(({ cast }) => setActors(cast))
      .catch(error => console.error(error))
      .finally(setLoading(false));
  }, [movieID]);

  return (
    <div>
      <h2>Movie Cast</h2>
      <CastList>
        {actors.map(({ id, profile_path, name, character }) => (
          <CastItem
            key={id}
            name={name}
            profile={profile_path}
            character={character}
          />
        ))}
      </CastList>
    </div>
  );
};
