import { useState } from 'react';
import {
  ButtonSearch,
  InputField,
  SearchFormStyled,
} from './SearchForm.styled';

export const SearchForm = ({ onMovieSelect }) => {
  const [movie, setMovie] = useState('');

  const onChange = evt => {
    setMovie(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    if (movie) {
      onMovieSelect(movie);
    }
  };
  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <InputField onChange={onChange} />
      <ButtonSearch>Search</ButtonSearch>
    </SearchFormStyled>
  );
};
