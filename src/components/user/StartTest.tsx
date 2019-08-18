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

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
}

const StartTest: FunctionComponent<RouteComponentProps> = props => {
  const [modal, setModal] = useState(false);
  const [{ name }] = useContext(CurrentTestContext);

  window.onbeforeunload = e => {
    console.log('Stop this');

    e.preventDefault();
  };

  return <h2>{name}</h2>;
};

export default StartTest;
