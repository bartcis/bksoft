/* eslint-disable import/no-unresolved */
import React, { lazy } from 'react';
import pet, { Photo } from '@frontendmasters/pet';
import AppContext from './AppContext';
import { navigate, RouteComponentProps } from '@reach/router';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Carousel from './carousel';
import ErrorBoundary from './errorBoundary';

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

const Modal = lazy(() => import('./modal'));

class Details extends React.Component<RouteComponentProps<IProps>, IState> {
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
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <Query query={countiresQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Ładuje dane...</div>;
          if (error) return <div>Wystąpił błąd</div>;
          return (
            <div>
              <Carousel media={media} />
              <div>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
                <AppContext.Consumer>
                  {([theme]) => (
                    <button
                      onClick={this.toggleModal}
                      style={{ backgroundColor: theme.theme.buttonColor }}
                    >
                      Adopt {name}
                    </button>
                  )}
                </AppContext.Consumer>
                <p>{description}</p>
                { showModal ? (
                  <Modal>
                    <div>
                      <h1>Would you like to adpot {name}?</h1>
                      <button onClick={this.adopt}>Yes</button>
                      <button onClick={this.toggleModal}>No</button>
                    </div>
                  </Modal>
                ) : null }
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default function DetailsWithErrorBoundary(props: IProps) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
