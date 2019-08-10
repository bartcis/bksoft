/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

import StartPage from './user/StartPage';
import StartTest from './user/StartTest';
import PageLayout from './global/styled/PageLayout';
import StartMenu from './user/StartMenu';
import TestMenu from './user/TestMenu';
import ContentLayout from './global/styled/ContentLayout';
import Header from './global/Header';
import Footer from './global/Footer';
import styled from 'styled-components';
import ErrorBoundary from './global/errorBoundary';

const About = lazy(() => import('./user/About'));
const ProvideSupport = lazy(() => import('./user/ProvideSupport'));
const AppLog = lazy(() => import('./user/AppLog'));

const App = () => {
  return (
    <PageLayout>
      <Suspense fallback={<h1>loading route...</h1>}>
        <Router primary={false}>
          <StartMenu path="/*" />
          <TestMenu path="test/*" />
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
              <StartTest path="test/:id" />
            </Router>
          </Suspense>
        </Content>
        <Footer />
      </ContentLayout>
    </PageLayout>
  );
};

export default App;
// export default function AppWithErrorBoundary() {
//   return (
//     <ErrorBoundary>
//       <App />
//     </ErrorBoundary>
//   );
// }

const Content = styled.section`
  padding: 4rem 1rem 1rem;
  width: 100%;
  box-sizing: border-box;
`;
