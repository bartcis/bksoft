import React from 'react';
import { Link, Redirect, RouteComponentProps } from '@reach/router';

interface Props {}

interface State {
  hasError: boolean;
  redirect: boolean;
}

export default class ErrorBoundary extends React.Component<
  RouteComponentProps<Props>,
  State
> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: any) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 2000);
      // setTimeout(() => navigate('/'), 2000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error.
          <Link to="/">Click here</Link>
          to go back to the home page or wait 2 seconds
        </h1>
      );
    }

    return this.props.children;
  }
}
