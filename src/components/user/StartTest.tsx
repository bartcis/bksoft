import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
  useState,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';

import MenuTitleContext from '../context/MenuTitleContext';
import CurrentTestContext from '../context/CurrentTestContext';

import TestTerms from './TestTerms';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
}

const StartTest: FunctionComponent<RouteComponentProps> = props => {
  const [modal, setModal] = useState(false);
  const [{ name, id }] = useContext(CurrentTestContext);

  console.log(name, id);
  window.onbeforeunload = e => {
    console.log('Stop this');

    e.preventDefault();
  };

  return (
    <>
      <h2>{name}</h2>
      <TestTerms></TestTerms>
    </>
  );
};

export default StartTest;
