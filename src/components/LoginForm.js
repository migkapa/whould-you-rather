import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <h2 className='mdc-typography--headline2'>Sign In</h2>
        <div className='mdc-select'>
          <div className='mdc-select__anchor demo-width-class'>
            <i className='mdc-select__dropdown-icon'></i>
            <div className='mdc-select__selected-text'>Users</div>
            <span className='mdc-floating-label mdc-floating-label--float-above'>
              Pick a user
            </span>
            <div className='mdc-line-ripple'></div>
          </div>

          <div className='mdc-select__menu demo-width-class mdc-menu mdc-menu-surface'>
            <ul className='mdc-list'>
              <li className='mdc-list-item' data-value='grains'>
                Bread, Cereal, Rice, and Pasta
              </li>
              <li
                className='mdc-list-item mdc-list-item--selected'
                data-value='vegetables'
              >
                Vegetables
              </li>
              <li className='mdc-list-item' data-value='fruit'>
                Fruit
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
