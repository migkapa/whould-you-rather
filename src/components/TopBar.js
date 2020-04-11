import React from 'react';
import { connect } from 'react-redux';

function TobBar(props) {
 const  { authedUserData } = props;

  return (
    <header className='mdc-top-app-bar mdc-top-app-bar--fixed'>
      <div className='mdc-top-app-bar__row'>
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
          <span className='mdc-top-app-bar__title'>Would you Rather?</span>
        </section>
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
          <div className='loggedIn mdc-ripple-upgraded'>
            <img src={authedUserData.avatarURL} alt={authedUserData.name} />
            {authedUserData.name}
            <span className='separator'>|</span>
            <button className='mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded'>
              logout
            </button>
          </div>
        </section>
      </div>
    </header>
  );
}

function mapStateToProps( { authedUser, users } ) {
  const authedUserData = users[authedUser];

  return {
    authedUserData
  }

}

export default connect(mapStateToProps)(TobBar);