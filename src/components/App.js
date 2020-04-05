import React, { Component, Fragment } from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData()) // because connect we have access to dispatch as a property
  }

  render () {
    return (
      <Fragment>
        <LoadingBar />
        <LoginForm />
      </Fragment>
    );
  }
}

export default connect()(App);
