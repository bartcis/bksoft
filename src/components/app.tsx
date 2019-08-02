/* eslint-disable import/no-unresolved */
import React, { useState, lazy, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ThemeContext from './global/themeContext';
import { Router, Link } from '@reach/router';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import SearchParams from './global/search';
import NavBar from './global/navBar';

const Details = lazy(() => import('./global/details'));

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App() {
  const themeHook = useState({
    buttonColor: 'green',
  });

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={themeHook}>
          <section>
            <GlobalStyle />
            <NavBar />
            <Background>
              <Link to="/">
                <h1 id="first">Adopt me!</h1>
              </Link>
              <Suspense fallback={<h1>loading route...</h1>}>
                <Router>
                  <SearchParams path="/" />
                  <Details path="/details/:id" id="" />
                </Router>
              </Suspense>
            </Background>
          </section>
        </ThemeContext.Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Background = styled.div`
  background-color: peru;
  color: whitesmoke;
`;
