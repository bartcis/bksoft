import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import MenuTitleContext from '../context/MenuTitleContext';
import CurrentTestContext from '../context/CurrentTestContext';

import testsQuery from '../queries/testsListQuery';
import { useQuery } from 'graphql-hooks';

import TestGridElement from './TestGridElement';
import ThemeContext from '../context/ThemeContext';
import Loader from '../global/Loader';
import { navigate } from '@reach/router';

interface IProps {
  path: string;
}

interface ITest {
  id: string;
  nameFull: string;
  theme: string;
}

const StartPage = ({ path }: IProps) => {
  const [title, setTitle] = useContext(MenuTitleContext);
  const [test, setTest] = useContext(CurrentTestContext);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    setTitle('Start');
    setTheme('base');
  }, [setTitle, setTheme]);

  const { loading, error, data } = useQuery(testsQuery);

  if (loading) return <Loader />;
  if (error) return `Error! ${error}`;

  const tests: [{ id: string; nameFull: string; icon: string; theme: string }] =
    data.testListQuery;

  const updateTest = (test: ITest) => {
    setTest({ id: test.id, name: test.nameFull, theme: test.theme });
    navigate(`test/${test.id}`);
  };

  return (
    <>
      <h2>Wybierz test osobowości:</h2>
      <Container>
        {tests.map(test => (
          <span key={test.id} onClick={() => updateTest(test)}>
            <TestGridElement name={test.nameFull} icon={test.icon} />
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
