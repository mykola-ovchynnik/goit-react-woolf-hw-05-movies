import axios from 'axios';

// const API_KEY = '35e06492e0a6abf094f13254e90d3514';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWUwNjQ5MmUwYTZhYmYwOTRmMTMyNTRlOTBkMzUxNCIsInN1YiI6IjY1ZTQ0OGFkYzk5ODI2MDE3YjYzNWQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgnj5wglUrZkxfComjLe7ezDV__x8ttfIV2b4V8LRuc';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getMovies = async () => {
  const { data } = await axios.get(`/3/trending/movie/day`);
  const movies = data.results;
  return movies;
};

export const fetchMovie = async movieID => {
  const { data } = await axios.get(`/3/movie/${movieID}`);

  return data;
};

export const fetchSearchMovie = async searchQuery => {
  const { data } = await axios.get(`/3/search/movie`, {
    params: {
      query: searchQuery,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  const movies = data.results;
  return movies;
};

export const fetchCast = async movieID => {
  const { data } = await axios.get(`/3/movie/${movieID}/credits`);

  return data;
};

export const fetchReviews = async movieID => {
  const { data } = await axios.get(`/3/movie/${movieID}/reviews`);

  return data;
};
