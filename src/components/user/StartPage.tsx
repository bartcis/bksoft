import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';
import styled from 'styled-components';

import MenuTitleContext from '../context/MenuTitleContext';

import { Query } from 'react-apollo';
import testsQuery from '../queries/testsListQuery';

import TestGridElement from './TestGridElement';

const StartPage: FunctionComponent<RouteComponentProps> = () => {
  const [title, setTitle] = useContext(MenuTitleContext);

  useEffect(() => {
    setTitle('Start');
  }, [setTitle]);

  return (
    <Query query={testsQuery}>
      {({ loading, error, data }: any) => {
        if (loading) return `Loading...`;
        if (error) return `Error`;

        const tests: [{ id: string; name: string; icon: string }] =
          data.testListQuery;

        return (
          <Container>
            <h1>Wybierz test osobowości:</h1>
            {tests.map(test => (
              <TestGridElement
                key={test.id}
                name={test.name}
                icon={test.icon}
                id={test.id}
              />
            ))}
          </Container>
        );
      }}
    </Query>
  );
};

export default StartPage;

const Container = styled.section`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
