/* eslint-disable import/no-unresolved */
import React, { useState, lazy, Suspense, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Router, Link } from '@reach/router';

import AppContext from './global/AppContext';

import StartPage from './user/StartPage';
import Header from './global/Header';
import Footer from './global/Footer';

const Details = lazy(() => import('./global/details'));

export default function App() {
  const [theme] = useContext(AppContext);

  // useEffect(() => {
  //   setTheme({ theme: 'base' });
  // }, [setTheme]);

  return (
    <>
      <Layout>
        <Header theme={theme.theme} />
        <Suspense fallback={<h1>loading route...</h1>}>
          <Router>
            <StartPage path="/" />
            <Details path="/details/:id" id="" />
          </Router>
        </Suspense>
        <Footer theme={theme.theme} />
      </Layout>
    </>
  );
}

const Layout = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr 2rem;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
