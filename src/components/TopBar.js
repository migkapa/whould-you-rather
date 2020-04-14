import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory} from 'react-router-dom';
import { logoutAuthedUser } from '../actions/authedUser';

function TobBar(props) {
  const { dispatch, authedUserData } = props;
  const history = useHistory();

  function handleLogout() {
    dispatch(logoutAuthedUser(null));
    history.push('/')
  }

  return (
    <header className='mdc-top-app-bar mdc-top-app-bar--fixed'>
      <div className='mdc-top-app-bar__row'>
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
          <span className='mdc-top-app-bar__title'>Would you Rather?</span>
          <nav className='header__nav'>
            <ul className='app-menu header__nav-list header__nav-list--selected'>
              <li className='header__nav-item'>
                <NavLink
                  className='header__nav-link'
                  exact
                  to='/'
                  activeClassName='selected'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='header__nav-link'
                  to='/leaderboard'
                  activeClassName='selected'
                >
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
          <div className='loggedIn mdc-ripple-upgraded'>
            <img src={authedUserData.avatarURL} alt={authedUserData.name} />
            {authedUserData.name}
            <span className='separator'>|</span>
            <button
              onClick={handleLogout}
              className='mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded'
            >
              logout
            </button>
          </div>
        </section>
      </div>
    </header>
  );
}

function mapStateToProps({ authedUser, users }) {
  const authedUserData = users[authedUser];

  return {
    authedUserData,
  };
}

export default connect(mapStateToProps)(TobBar);
