import React from 'react';
import { connect } from 'react-redux';

function QuestionStats(props) {
  const { totalVotes, percentageOne, givenAnswer, options } = props;
  const theOtherOption =
    givenAnswer.name === 'optionOne'
      ? options['optionTwo'].text
      : options['optionOne'].text;

  return (
    <div className='questionstats'>
      <p
        className='mdc-typography--headline6 secondary-color'
        style={{ marginBottom: 10 }}
      >
        Here are some facts:
      </p>
      <p className='mdc-typography--headline5' style={{ marginBottom: 10 }}>
        In total <strong>{totalVotes} people</strong> have voted.
      </p>
      <p className='mdc-typography--headline5'>
        <strong>{percentageOne.toFixed()}%</strong> of them have voted to{' '}
        {givenAnswer.text} and <strong>{100 - percentageOne.toFixed()}%</strong>{' '}
        of them to {theOtherOption}.
      </p>
    </div>
  );
}

function mapStateToProps(state, { id, givenAnswer, options }) {
  const { questions } = state;
  const question = questions[id];
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const percentageOne = (question.optionOne.votes.length / totalVotes) * 100;

  return {
    totalVotes,
    percentageOne,
    givenAnswer,
    options,
  };
}
export default connect(mapStateToProps)(QuestionStats);
