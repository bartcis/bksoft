import React, { FunctionComponent, useContext, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import MenuTitleContext from '../context/MenuTitleContext';
import CurrentTestContext from '../context/CurrentTestContext';

import testsQuery from '../queries/testsListQuery';
import { useQuery } from 'graphql-hooks';

import TestGridElement from './TestGridElement';
import ThemeContext from '../context/ThemeContext';

interface IProps {
  path: string;
}

const StartPage = (props: IProps) => {
  const [title, setTitle] = useContext(MenuTitleContext);
  const [test, setTest] = useContext(CurrentTestContext);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    setTitle('Start');
    setTheme('base');
  }, [setTitle, setTheme]);

  const { loading, error, data } = useQuery(testsQuery);

  if (loading) return 'loading';
  if (error) return `Error! ${error}`;

  const tests: [{ id: string; nameFull: string; icon: string }] =
    data.testListQuery;

  return (
    <>
      <h2>Wybierz test osobowości:</h2>
      <Container>
        {tests.map(test => (
          <span key={test.id} onClick={() => setTest(test.id)}>
            <TestGridElement
              name={test.nameFull}
              icon={test.icon}
              id={test.id}
            />
          </span>
        ))}
      </Container>
    </>
  );
};

export default StartPage;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
