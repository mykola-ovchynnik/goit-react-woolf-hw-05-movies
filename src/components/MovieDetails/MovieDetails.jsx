import { Outlet, useLocation } from 'react-router-dom';
import placeholder from '../../images/no_img.png';
import {
  AdditionalInfoItem,
  AdditionalInfoWrapper,
  Details,
  DetailsWrapper,
  MainDetails,
} from './MovieDetails.styled';
import { Suspense } from 'react';
import { LinkButton } from 'styles/GlobalStyles';

export const MovieDetails = ({
  id,
  title,
  overview,
  poster_path,
  vote_average,
  genres,
}) => {
  const location = useLocation();

  const userScorePercent = (vote_average * 10).toFixed(0);

  const formattedGenres = genres.map(genre => genre.name).join(', ');

  return (
    <MainDetails>
      <DetailsWrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : placeholder
          }
          width={250}
          alt="poster"
        />
        <Details>
          <h2>{title}</h2>
          <p>User score: {userScorePercent}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <span>Genres</span>
          <p>{formattedGenres}</p>
        </Details>
      </DetailsWrapper>

      <AdditionalInfoWrapper>
        <AdditionalInfoItem>
          <LinkButton to={`/movies/${id}/cast`} state={{ from: location }}>
            Cast
          </LinkButton>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <LinkButton to={`/movies/${id}/reviews`} state={{ from: location }}>
            Reviews
          </LinkButton>
        </AdditionalInfoItem>
      </AdditionalInfoWrapper>

      <Suspense>
        <Outlet />
      </Suspense>
    </MainDetails>
  );
};
