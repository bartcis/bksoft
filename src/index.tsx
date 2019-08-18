/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from './components/global/designSystem/ThemeExport';

import ThemeContext from './components/context/ThemeContext';
import MenuTitleContext from './components/context/MenuTitleContext';
import CurrentTestContext from './components/context/CurrentTestContext';

import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';

import App from './components/App';
import Loader from './components/global/Loader';

const client = new GraphQLClient({
  url: 'http://localhost:4000',
  cache: memCache(),
});

let currentTheme: string;

function AppWrapper() {
  const themeHook = useState('base');
  const menuTitleHook = useState('Start');
  const currentTestHook = useState('');
  const [loader, setLoader] = useState(true);

  currentTheme = themeHook[0];

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [setLoader]);

  return (
    <React.StrictMode>
      <ClientContext.Provider value={client}>
        <ThemeProvider theme={styledTheme}>
          <ThemeContext.Provider value={themeHook}>
            <MenuTitleContext.Provider value={menuTitleHook}>
              <CurrentTestContext.Provider value={currentTestHook}>
                <GlobalStyle />
                <App />
                {loader ? <Loader /> : ''}
              </CurrentTestContext.Provider>
            </MenuTitleContext.Provider>
          </ThemeContext.Provider>
        </ThemeProvider>
      </ClientContext.Provider>
    </React.StrictMode>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'nunito_sansblack';
    src: url('/fonts/nunitosans-black-webfont.woff2') format('woff2'),
      url('/fonts/nunitosans-black-webfont.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  font-family: 'nunito_sansregular';
  src: url('/fonts/nunitosans-regular-webfont.woff2') format('woff2'),
    url('/fonts/nunitosans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  }

  @font-face {
    font-family: 'nunito_sansextralight';
    src: url('/fonts/nunitosans-extralight-webfont.woff2') format('woff2'),
      url('/fonts/nunitosans-extralight-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${() =>
      styledTheme.styledColors[currentTheme].backgroundBody};
    box-sizing: border-box;
  }

  h1 {
    color: ${() => styledTheme.styledColors[currentTheme].font};
    font-family: 'nunito_sansblack';
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  h2 {
    color: ${() => styledTheme.styledColors[currentTheme].font};
    font-family: 'nunito_sansblack';
    font-size: 1.25rem;
  }

  h3 {
    font-family: 'nunito_sansblack';
    color: ${() => styledTheme.styledColors[currentTheme].font};
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
    color: ${() => styledTheme.styledColors[currentTheme].font};
    font-family: 'nunito_sansregular';
  }

  .link {
    text-decoration: none;
    color: ${() => styledTheme.styledColors[currentTheme].leadColorMid};
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: ${() => styledTheme.styledColors[currentTheme].contrast1};
    }
    &--footer {
      margin: 0 .5rem;
    }
  }
`;

render(<AppWrapper />, document.getElementById('root'));
