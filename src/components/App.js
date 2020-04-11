import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Dashboard from '../components/Dashboard';
import TopBar from '../components/TopBar';
import AddButton from '../components/AddButton';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData()); // because connect we have access to dispatch as a property
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loadingBar.default === 1 ? null : (
            <div>
              {authedUser === null ? (
                <LoginForm />
              ) : (
                <div className='app_main'>
                  <TopBar />
                  <Switch>
                    <Route path='/'>
                      <Dashboard />
                    </Route>
                  </Switch>
                  <AddButton />
                </div>
              )}
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { users, loadingBar, authedUser } = state;
  return {
    users,
    loadingBar,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
