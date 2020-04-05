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
        {this.props.loadingBar.default === 1 ? null : <LoginForm />}
      </Fragment>
    );
  }
}


function mapStateToProps( state ) {
  const { loadingBar } = state;
  return {
    loadingBar
  }
}

export default connect(mapStateToProps)(App);
