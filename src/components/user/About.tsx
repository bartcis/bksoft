import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';

import MenuTitleContext from '../context/MenuTitleContext';

const About: FunctionComponent<RouteComponentProps> = () => {
  return <h1>About Page</h1>;
};

export default About;
