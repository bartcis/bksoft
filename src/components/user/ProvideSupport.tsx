import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Array<Photo>;
  location: string;
  id: number;
}

const ProvideSupport: FunctionComponent<RouteComponentProps> = () => {
  return <h1>Support</h1>;
};

export default ProvideSupport;
