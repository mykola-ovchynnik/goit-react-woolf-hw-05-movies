import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import {
  AdditionalInfoItem,
  AdditionalInfoWrapper,
  Details,
  DetailsWrapper,
  MainDetails,
} from './MovieDetails.styled';
import { Suspense, useEffect, useState } from 'react';
import { fetchCast } from 'service/movie-service';
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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const userScorePercent = (vote_average * 10).toFixed(0);

  const formattedGenres = genres.map(genre => genre.name).join(', ');

  return (
    <MainDetails>
      <DetailsWrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
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
