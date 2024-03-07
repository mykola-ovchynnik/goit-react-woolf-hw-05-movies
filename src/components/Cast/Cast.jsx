import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/movie-service';
import { CastItem } from './CastItem.jsx/CastItem';
import { CastList } from './Cast.styled';
import { AdditionalInfoHeader } from 'components/MovieDetails/MovieDetails.styled';

const Cast = () => {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCast(movieID)
      .then(({ cast }) => setActors(cast))
      .catch(error => console.error(error));
  }, [movieID]);

  return (
    <div>
      <AdditionalInfoHeader>Movie Cast</AdditionalInfoHeader>
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

export default Cast;
