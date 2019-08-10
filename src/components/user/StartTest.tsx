import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';

import MenuTitleContext from '../context/MenuTitleContext';
import console = require('console');

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
}

const StartTest: FunctionComponent<RouteComponentProps> = props => {
  return <h1>Test</h1>;
};

export default StartTest;
