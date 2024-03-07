import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Page404 from 'pages/Page404';

const Home = lazy(() => import('../../pages/Home'));
const Movie = lazy(() => import('../../pages/Movie'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const MovieSearch = lazy(() => import('../../pages/MovieSearch'));

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
