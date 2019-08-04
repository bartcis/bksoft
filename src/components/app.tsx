/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import StartPage from './user/StartPage';
import PageLayout from './global/styled/PageLayout';
import SideMenu from './global/SideMenu';
import ContentLayout from './global/styled/ContentLayout';
import Header from './global/Header';
import Footer from './global/Footer';
import styled from 'styled-components';
import ErrorBoundary from './global/errorBoundary';
import console = require('console');

const About = lazy(() => import('./user/About'));
const ProvideSupport = lazy(() => import('./user/ProvideSupport'));
const AppLog = lazy(() => import('./user/AppLog'));

const menusQuery = gql`
  {
    menusQuery {
      main {
        title
        slug
        list {
          link
          label
        }
      }
    }
  }
`;

interface IProps {
  id: string;
  path: string;
}

interface ITypes {
  loading: boolean;
  error: string;
  data: Object;
}

export default class App extends React.Component {
  render() {
    return (
      <Query query={menusQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Ładuje dane...</div>;
          if (error) return <div>Wystąpił błąd {error}</div>;
          console.log(data);
          return (
            <PageLayout>
              <Suspense fallback={<h1>loading route...</h1>}>
                <Router primary={false}>
                  <SideMenu
                    data={data.menusQuery[0].main}
                    path={data.menusQuery[0].main.slug}
                  />
                  <SideMenu
                    data={data.menusQuery[0].about}
                    path={data.menusQuery[0].about.slug}
                  />
                  <SideMenu
                    data={data.menusQuery[0].support}
                    path={data.menusQuery[0].support.slug}
                  />
                  <SideMenu
                    data={data.menusQuery[0].history}
                    path={data.menusQuery[0].history.slug}
                  />
                </Router>
              </Suspense>
              <ContentLayout>
                <Header />
                <Content>
                  <Suspense fallback={<h1>loading route...</h1>}>
                    <Router>
                      <StartPage path="/" />
                      <About path="about" />
                      <ProvideSupport path="provide-support" />
                      <AppLog path="history" />
                    </Router>
                  </Suspense>
                </Content>
                <Footer />
              </ContentLayout>
            </PageLayout>
          );
        }}
      </Query>
    );
  }
}

// export default function AppWithErrorBoundary() {
//   return (
//     <ErrorBoundary>
//       <App />
//     </ErrorBoundary>
//   );
// }

const Content = styled.section`
  padding: 4rem 1rem 1rem;
`;
