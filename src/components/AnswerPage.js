import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import QuestionStats from '../components/QestionStats';

class AnswerPage extends Component {
  state = {
    selectedOption: 'optionOne',
  };

  renderOption = (option) => {
    return (
      <div key={option.id} className='mdc-form-field demo-radio-form-field'>
        <div className='mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded'>
          <input
            className='mdc-radio__native-control'
            type='radio'
            name='question-answer'
            id={`question-answer-${option.id}`}
            value={option.id}
            onChange={this.handleChange}
          />
          <div className='mdc-radio__background'>
            <div className='mdc-radio__outer-circle'></div>
            <div className='mdc-radio__inner-circle'></div>
          </div>
          <div className='mdc-radio__ripple'></div>
        </div>
        <label
          className='mdc-typography--headline5'
          htmlFor={`question-answer-${option.id}`}
        >
          {option.text}
        </label>
      </div>
    );
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      selectedOption: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, id, authedUser } = this.props;
    const { selectedOption } = this.state;

    dispatch(
      handleAnswerQuestion({
        authedUser,
        qid: id,
        answer: selectedOption,
      })
    );
  };

  render() {
    const { options, authorData, givenAnswer, id, answered } = this.props;

    return (
      <div className='answer-container top-space container--questions'>
        <div>
          {answered === true ? null : (
            <div className='answer-header'>
              <img
                width='70'
                height='70'
                className='author-img'
                src={authorData.avatarURL}
                alt={authorData.name}
              />
              <p className='mdc-typography--headline4'>
                <strong>{authorData.name}</strong> would like to know if
              </p>
              <p className='mdc-typography--headline4'>you would rather:</p>
            </div>
          )}
          {answered === true ? (
            <div className='answer-statistic'>
              <p className='mdc-typography--headline4'>
                You answered that you would rather
              </p>
              <p className='mdc-typography--headline4'>
                <strong>{givenAnswer.text}</strong> than{' '}
                <strong>
                  {givenAnswer.name === 'optionOne'
                    ? options['optionTwo'].text
                    : options['optionOne'].text}
                </strong>
              </p>
              <p className='mdc-typography--subtitle1'>
                This question was created by: {authorData.name}
              </p>
              <QuestionStats
                id={id}
                options={options}
                givenAnswer={givenAnswer}
              />
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              {Object.keys(options).map((id) => this.renderOption(options[id]))}
              <div className='submit-wrapper'>
                <button className='mdc-button mdc-button--raised mdc-fab--extended mdc-ripple-upgraded blue-bg'>
                  <span className='mdc-button__ripple'></span> Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}

function mapStatsToProps(state, { match }) {
  const { authedUser, questions, users } = state;
  const { id } = match.params;
  const options = {
    optionOne: { id: 'optionOne', text: questions[id].optionOne.text },
    optionTwo: { id: 'optionTwo', text: questions[id].optionTwo.text },
  };

  const authorData = users[questions[id].author];
  const answered = Object.keys(users[authedUser].answers).includes(id);
  const givenAnswerName = users[authedUser].answers[id];
  const givenAnswerText = givenAnswerName
    ? questions[id][givenAnswerName].text
    : null;

  return {
    id,
    authedUser,
    authorData,
    options,
    answered,
    givenAnswer: {
      name: givenAnswerName,
      text: givenAnswerText,
    },
  };
}

export default connect(mapStatsToProps)(AnswerPage);
