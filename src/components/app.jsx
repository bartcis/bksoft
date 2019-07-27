/* eslint-disable import/no-unresolved */
import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ThemeContext from './global/themeContext';
import { Router, Link } from '@reach/router';

import SearchParams from './global/search';
import Details from './global/details';


export default function App () {
  const themeHook = useState({
    buttonColor: 'green'
  });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <section>
          <GlobalStyle/>
          <Background>
            <Link to='/'>
              <h1 id='first'>Adopt me!</h1>
            </Link>
            <Router>
              <SearchParams path='/'/>
              <Details path='/details/:id' />
            </Router>
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
