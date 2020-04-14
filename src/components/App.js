import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Dashboard from '../components/Dashboard';
import TopBar from '../components/TopBar';
import AddButton from '../components/AddButton';
import AddQuestion from '../components/AddQuestion';
import AnswerPage from '../components/AnswerPage';
import LeaderBoard from '../components/LeaderBoard';

class App extends Component {
  componentDidMount() {
    // because connect we have access to dispatch as a property
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar
            className='loading'
            updateTime={50}
            maxProgress={100}
            progressIncrease={10}
          />
          <div className='app_main'>
            {authedUser === null ? (
              this.props.loading === true ? null : (
                <LoginForm />
              )
            ) : (
              <div>
                <TopBar />
                <Route exact path='/'>
                  <Dashboard />
                  <AddButton />
                </Route>
                <Route path='/add' component={AddQuestion} />
                <Route path='/questions/:id' component={AnswerPage} />
                <Route path='/leaderboard'>
                  <LeaderBoard />
                  <AddButton />
                </Route>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { loadingBar, authedUser } = state;
  return {
    loading: loadingBar.default === 1,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
