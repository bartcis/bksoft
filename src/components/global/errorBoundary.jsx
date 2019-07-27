import React from 'react';
import { Link, Redirect, navigate } from '@reach/router';

export default class ErrorBoundary extends React.Component {
  constructor () {
    super();
    this.state = {
      hasError: false,
      redirect: false
    }
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 2000);
      // setTimeout(() => navigate('/'), 2000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error.
          <Link to='/'>Click here</Link>
          to go back to the home page or wait 2 seconds
        </h1>
      )
    }

    return this.props.children
  }
}
