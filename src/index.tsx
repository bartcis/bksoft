/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { render } from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from './components/global/designSystem/ThemeExport';
import AppContext from './components/global/AppContext';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';
import console = require('console');

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

let currentTheme: string;

function AppWrapper() {
  const appHook = useState({
    theme: 'base',
  });

  currentTheme = appHook[0].theme;

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeProvider theme={styledTheme}>
          <AppContext.Provider value={appHook}>
            <GlobalStyle />
            <App />
          </AppContext.Provider>
        </ThemeProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'nunito_sansblack';
    src: url('./fonts/nunitosans-black-webfont.woff2') format('woff2'),
      url('./fonts/nunitosans-black-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  font-family: 'nunito_sansregular';
  src: url('./fonts/nunitosans-regular-webfont.woff2') format('woff2'),
    url('./fonts/nunitosans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  }

  @font-face {
    font-family: 'nunito_sansextralight';
    src: url('./fonts/nunitosans-extralight-webfont.woff2') format('woff2'),
      url('./fonts/nunitosans-extralight-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${() => styledTheme.styledColors[currentTheme].body};
    box-sizing: border-box;
  }

    h1 {
      color: ${() => styledTheme.styledColors[currentTheme].mainText};
      font-family: 'nunito_sansblack';
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    h2 {
      color: ${() => styledTheme.styledColors[currentTheme].mainText};
      font-family: 'nunito_sansblack';
      font-size: 1.25rem;
    }

    h3 {
      font-family: 'nunito_sansblack';
      text-transform: uppercase;
      font-size: 1rem;
    }

    h4 {
        color: yellow;
    }

    h5 {
      color: ${() => styledTheme.styledColors[currentTheme].residualText};
      font-family: 'nunito_sansextralight';
    }

    p {
      color: ${() => styledTheme.styledColors[currentTheme].mainText};
      font-family: 'nunito_sansregular';
    }

    .link {
      text-decoration: none;
      color: ${() => styledTheme.styledColors[currentTheme].link};
      transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        color: ${() => styledTheme.styledColors[currentTheme].hoverState};
      }
      &--footer {
        margin: 0 .5rem;
      }
    }
`;

render(<AppWrapper />, document.getElementById('root'));
