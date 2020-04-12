import React, { Component } from 'react';

class AddQuestion extends Component {
  render() {
    return (
      <div className='question-form container--questions top-space '>
        <h4 className='mdc-typography--headline4'>Add a question</h4>
        <p className='mdc-typography--headline6'>Would you rather...</p>

        <form className='question-form'>
          <div className='mdc-text-field text-field mdc-text-field--outlined'>
            <input
              type='text'
              id='optioneOne'
              className='mdc-text-field__input'
              placeholder='Enter first option of the question'
            />
            <div className='mdc-notched-outline mdc-notched-outline--upgraded'>
              <div className='mdc-notched-outline__leading'></div>
              <div className='mdc-notched-outline__notch'></div>
              <div className='mdc-notched-outline__trailing'></div>
            </div>
            
          </div>
          <p className='separator-or'>or</p>
          <div className='mdc-text-field text-field mdc-text-field--outlined'>
            <input
              type='text'
              id='optioneOne'
              className='mdc-text-field__input'
            />
            <div className='mdc-notched-outline mdc-notched-outline--upgraded'>
              <div className='mdc-notched-outline__leading'></div>
              <div className='mdc-notched-outline__notch'></div>
              <div className='mdc-notched-outline__trailing'></div>
            </div>
          </div>
          <div className='submit-wrapper'>
            <button className='mdc-button mdc-button--raised mdc-fab--extended mdc-ripple-upgraded blue-bg'>
              <span className='mdc-button__ripple'></span> Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddQuestion;
