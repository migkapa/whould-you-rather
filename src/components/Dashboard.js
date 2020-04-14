import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    showAnswered: false,
  };

  showAnswered = () => {
    this.setState({
      showAnswered: true,
    });
  };

  showUnAnswered = () => {
    this.setState({
      showAnswered: false,
    });
  };

  getAuthedData = (id, users) => {
    const user = users.filter((user) => user.id === id);
    return user[0];
  };

  render() {
    const { answered, unanswered, users, authedUser } = this.props;
    const { showAnswered } = this.state;
    const list = showAnswered === true ? answered : unanswered;

    return (
      <div
        className='mdc-tab-bar container container--questions top-space'
        role='tablist'
      >
        <div className='welcome_header'>
          <p className='mdc-typography--headline6'>
            Hello {this.getAuthedData(authedUser, users).name}, <br />
            <span className='mdc-typography--subtitle1'>
              Here it is your list of questions.
            </span>
          </p>
        </div>

        <div className='mdc-tab-scroller'>
          <div className='mdc-tab-scroller__scroll-area'>
            <div className='mdc-tab-scroller__scroll-content'>
              <button
                className={`mdc-tab ${
                  !this.state.showAnswered ? 'mdc-tab--active' : ''
                }`}
                onClick={this.showUnAnswered}
              >
                <span className='mdc-tab__content'>
                  <span className='mdc-tab__text-label'>Unanswered</span>
                </span>
                <span
                  className={`mdc-tab-indicator ${
                    !this.state.showAnswered ? 'mdc-tab-indicator--active' : ''
                  }`}
                >
                  <span
                    className='mdc-tab-indicator__content
            mdc-tab-indicator__content--underline'
                  ></span>
                </span>
                <span className='mdc-tab__ripple mdc-ripple-upgraded'></span>
              </button>
              <button
                className={`mdc-tab ${
                  this.state.showAnswered ? 'mdc-tab--active' : ''
                }`}
                onClick={this.showAnswered}
              >
                <span className='mdc-tab__content'>
                  <span className='mdc-tab__text-label'>Answered</span>
                </span>
                <span
                  className={`mdc-tab-indicator ${
                    this.state.showAnswered ? 'mdc-tab-indicator--active' : ''
                  }`}
                >
                  <span
                    className='mdc-tab-indicator__content
            mdc-tab-indicator__content--underline'
                  ></span>
                </span>
                <span className='mdc-tab__ripple mdc-ripple-upgraded'></span>
              </button>
            </div>
          </div>
        </div>

        <ul className='mdc-list answers-list'>
          {list.map((question) => (
            <li key={question.id} className='mdc-list-item'>
              <Link className='cover-link' to={`questions/${question.id}`} />
              <img
                src={this.getAuthedData(question.author, users).avatarURL}
                alt=''
              />
              <span className='mdc-list-item__text mdc-typography--headline6'>
                {question.optionOne.text} or ...
              </span>

              <button className='mdc-button'>
                <span className='mdc-button__ripple'></span> View
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser, questions, users } = state;
  const answers = users[authedUser].answers;

  // maping form authenticated users' answers and
  // sorting with the timestamp
  const answered = Object.keys(answers)
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(questions)
    .filter((id) => !Object.keys(answers).includes(id))
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    authedUser,
    answered,
    unanswered,
    users: Object.keys(users).map((id) => {
      const { name, avatarURL } = users[id];
      return {
        id,
        name,
        avatarURL,
      };
    }),
  };
}

export default connect(mapStateToProps)(Dashboard);
