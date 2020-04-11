import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class LoginForm extends Component {
  state = {
    showDropdown: false,
  };

  // selecting the user from the dropdown
  handleSelectUser = (e) => {
    const value = e.target.dataset.value;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(value)); // dispatching the SET_AUTHED_USER action

    this.setState({
      showDropdown: false,
    });
  };

  // toggle the dropdown
  handleDropdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  };

  render() {
    const { loggedInUser } = this.props;

    return (
      <div className='mdc-layout-grid mdc-layout-grid--align-middle'>
        <div className='mdc-layout-grid__inner'>
          <div className='mdc-layout-grid__cell--span-4'></div>
          <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--align-middle'>
            <div className='login-form'>
              <h2 className='mdc-typography--headline2'>Sign In</h2>
              <div className='mdc-select'>
                <div
                  onClick={this.handleDropdown}
                  className='mdc-select__anchor demo-width-class'
                >
                  <i className='mdc-select__dropdown-icon'></i>
                  <div className='mdc-select__selected-text'>
                    {loggedInUser ? loggedInUser.name : 'Users'}
                  </div>
                  <span className='mdc-floating-label mdc-floating-label--float-above'>
                    Pick a user
                  </span>
                  <div className='mdc-line-ripple'></div>
                </div>
                <div
                  className={`mdc-select__menu demo-width-class mdc-menu mdc-menu-surface ${
                    this.state.showDropdown ? 'mdc-menu-surface--open' : ''
                  }`}
                >
                  <ul className='mdc-list'>
                    {this.props.users.map((user) => (
                      <li
                        key={user.id}
                        onClick={this.handleSelectUser}
                        className='mdc-list-item user-dropdown'
                        data-value={user.id}
                      >
                        <img src={user.avatarURL} alt={user.name} />
                        {user.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mdc-layout-grid__cell--span-4'></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { users, authedUser } = state;
  const loggedInUser = users[authedUser];

  return {
    users: Object.keys(users).map((id) => {
      const { name, avatarURL } = users[id];

      return {
        id,
        name,
        avatarURL,
      };
    }),
   loggedInUser
  };
}

export default connect(mapStateToProps)(LoginForm);