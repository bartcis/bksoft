/* eslint-disable import/no-unresolved */
import React, { useState, lazy, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ThemeContext from './global/themeContext';
import { Router, Link } from '@reach/router';

import SearchParams from './global/search';
import NavBar from './global/navBar';

const Details = lazy(() => import('./global/details'));

export default function App () {
  const themeHook = useState({
    buttonColor: 'green'
  });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <section>
          <GlobalStyle/>
          <NavBar />
          <Background>
            <Link to='/'>
              <h1 id='first'>Adopt me!</h1>
            </Link>
            <Suspense fallback={<h1>loading route...</h1>}>
              <Router>
                <SearchParams path='/'/>
                <Details path='/details/:id' />
              </Router>
            </Suspense>
            
          </Background>
        </section>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Background = styled.div`
    background-color: peru;
    color: whitesmoke;
`
