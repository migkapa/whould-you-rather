import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  disableSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;

    return optionOneText === '' || optionTwoText === '';
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(this.state));

    this.setState(() => ({
      toHome: true,
    }));
  };

  render() {
    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />;
    }

    return (
      <div className='question-form container--questions top-space '>
        <h4 className='mdc-typography--headline4'>Add a question {toHome}</h4>
        <p className='mdc-typography--headline6'>Would you rather...</p>

        <form className='question-form' onSubmit={this.handleSubmit}>
          <div className='mdc-text-field text-field mdc-text-field--outlined'>
            <input
              type='text'
              id='optionOne'
              className='mdc-text-field__input'
              name='optionOneText'
              placeholder='Enter first option of the question'
              onChange={this.handleInputChange}
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
              id='optionTwo'
              className='mdc-text-field__input'
              name='optionTwoText'
              onChange={this.handleInputChange}
            />
            <div className='mdc-notched-outline mdc-notched-outline--upgraded'>
              <div className='mdc-notched-outline__leading'></div>
              <div className='mdc-notched-outline__notch'></div>
              <div className='mdc-notched-outline__trailing'></div>
            </div>
          </div>
          <div className='submit-wrapper'>
            <button
              className='mdc-button mdc-button--raised mdc-fab--extended mdc-ripple-upgraded blue-bg'
              disabled={this.disableSubmit()}
            >
              <span className='mdc-button__ripple'></span> Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddQuestion);
