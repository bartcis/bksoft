/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

import StartPage from './user/StartPage';
import PageLayout from './global/styled/PageLayout';
import StartMenu from './user/MenuStart';
import ContentLayout from './global/styled/ContentLayout';
import Header from './global/Header';
import Footer from './global/Footer';
import styled from 'styled-components';
import ErrorBoundary from './global/errorBoundary';

const About = lazy(() => import('./user/About'));
const ProvideSupport = lazy(() => import('./user/ProvideSupport'));
const Authors = lazy(() => import('./user/Authors'));
const StartTest = lazy(() => import('./user/StartTest'));
const TestMenu = lazy(() => import('./user/MenuTest'));

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
              <Authors path="authors" />
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
