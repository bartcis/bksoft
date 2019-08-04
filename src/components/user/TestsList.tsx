/* eslint-disable import/no-unresolved */
import React, { lazy } from 'react';
import pet, { Photo } from '@frontendmasters/pet';
import AppContext from './AppContext';
import { navigate, RouteComponentProps } from '@reach/router';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Carousel from './carousel';
import ErrorBoundary from '../global/ErrorBoundary';
import console = require('console');

interface IProps {
  id: string;
  path: string;
}

interface IState {
  loading: boolean;
  showModal: boolean;
  url: string;
  name: string;
  animal: string;
  location: string;
  description: string;
  media: Array<Photo>;
  breed: string;
}

interface ITypes {
  loading: boolean;
  error: string;
  data: Object;
}

const countiresQuery = gql`
  {
    countries {
      name
      population
      inNato
    }
  }
`;

class TestList extends React.Component<RouteComponentProps<IProps>, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true,
      showModal: false,
      url: '',
      name: '',
      animal: '',
      location: '',
      description: '',
      media: [],
      breed: '',
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.adopt = this.adopt.bind(this);
  }

  componentDidMount() {
    if (!this.props.id) {
      navigate('/');
      return;
    }

    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  adopt() {
    navigate(this.state.url);
  }

  render() {
    return (
      <Query query={countiresQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Ładuje dane...</div>;
          if (error) return <div>Wystąpił błąd</div>;
          console.log(data);
          return <div>lista testów</div>;
        }}
      </Query>
    );
  }
}

export default function TestListWithErrorBoundary(props: IProps) {
  return (
    <ErrorBoundary>
      <TestList {...props} />
    </ErrorBoundary>
  );
}
