import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import MenuTitleContext from '../context/MenuTitleContext';
import CurrentTestContext from '../context/CurrentTestContext';

import testsQuery from '../queries/testsListQuery';
import { useQuery } from 'graphql-hooks';

import TestGridElement from './TestGridElement';
import ThemeContext from '../context/ThemeContext';
import Loader from '../global/Loader';
import console = require('console');

interface IProps {
  path: string;
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

  console.log(data);

  const tests: [{ id: string; nameFull: string; icon: string }] =
    data.testListQuery;

  return (
    <>
      <h2>Wybierz test osobowości:</h2>
      <Container>
        {tests.map(test => (
          <span
            key={test.id}
            onClick={() => setTest({ id: test.id, name: test.nameFull })}
          >
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
