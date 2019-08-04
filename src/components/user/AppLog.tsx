import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';
import { Photo } from '@frontendmasters/pet';
import SearchParams from '../global/search';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Array<Photo>;
  location: string;
  id: number;
}

const AppLog: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <h1>ABC</h1>
      <h1>ABC</h1>
      <h1>ABC</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

export default AppLog;
