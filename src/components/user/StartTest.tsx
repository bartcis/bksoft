import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
  useState,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';

import MenuTitleContext from '../context/MenuTitleContext';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
}

const StartTest: FunctionComponent<RouteComponentProps> = props => {
  const [modal, setModal] = useState(false);

  window.onbeforeunload = e => {
    console.log('Stop this');

    e.preventDefault();
  };

  return <h1>Test</h1>;
};

export default StartTest;
