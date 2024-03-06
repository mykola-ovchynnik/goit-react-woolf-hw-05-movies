import placeholder from '../../../images/no_img.png';
import {
  CastItemCharacter,
  CastItemImage,
  CastItemName,
  CastItemWrapper,
} from './CastItem.styled';

export const CastItem = ({ name, profile, character }) => {
  return (
    <CastItemWrapper>
      <CastItemImage
        src={
          profile ? `https://image.tmdb.org/t/p/w500/${profile}` : placeholder
        }
        alt=""
      />
      <CastItemName>{name}</CastItemName>
      <CastItemCharacter>Character: {character}</CastItemCharacter>
    </CastItemWrapper>
  );
};
