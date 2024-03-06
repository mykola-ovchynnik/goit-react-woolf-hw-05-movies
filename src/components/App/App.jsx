import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, MovieSearch, Movie } from 'pages';
import Page404 from 'pages/Page404';
import { Cast } from 'components/Cast/Cast';
import { Layout } from 'components/Layout/Layout';
import { Reviews } from 'components/Reviews/Reviews';

// const Cast = lazy(() => import('../Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/movies/:movieID" element={<Movie />}>
          <Route path="/movies/:movieID/cast" element={<Cast />} />
          <Route path="/movies/:movieID/reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
