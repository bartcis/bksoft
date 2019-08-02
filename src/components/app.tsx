/* eslint-disable import/no-unresolved */
import React, { useState, lazy, Suspense, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Router, Link } from '@reach/router';

import SearchParams from './global/search';
import Header from './global/Header';
import AppContext from './global/AppContext';

const Details = lazy(() => import('./global/details'));

export default function App() {
  const [theme] = useContext(AppContext);

  // useEffect(() => {
  //   setTheme({ theme: 'base' });
  // }, [setTheme]);

  return (
    <>
      <Header theme={theme.theme} />
        <Link to="/">
          <h1 id="first">Adopt me!</h1>
        </Link>
        <Suspense fallback={<h1>loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" id="" />
          </Router>
        </Suspense>
    </>
  );
}
