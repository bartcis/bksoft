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

const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function AppWrapper() {
    const appHook = useState({
        theme: 'base'
    });

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
    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        color: red;
    }

    h2 {
        color: purple;
    }

    h3 {
        color: orange;
    }

    h4 {
        color: yellow;
    }

    p {
        color: blue;
    }
`;

render(<AppWrapper />, document.getElementById('root'));
