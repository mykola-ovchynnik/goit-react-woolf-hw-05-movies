import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
