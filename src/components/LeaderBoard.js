import React from 'react';
import { connect } from 'react-redux';

function LeaderBoard(props) {
  const { users } = props;
  return (
    <div className='container--leaderboard top-space'>
      <div className='leaderboard-list'>
        {users.map((user) => (
          <div key={user.id} className='leaderboard-list__item'>
            <div className='mdc-card leaderboard-card'>
              <div className='leaderboard-img'>
                <img src={user.avatarURL} alt={user.name} />
              </div>
              <div className='mdc-card-wrapper__text-section'>
                <h2 className='leaderboard-card__title'>{user.name}</h2>
              </div>
              <div className='mdc-card-wrapper__text-section'>
                <div className='leaderboard-card__stats'>
                  <h3>Questions: </h3>
                  <div className='stats-items'>
                    <div className='stats-item'>
                      <h4 className='number mdc-typography--headline4'>
                        {user.answers}
                      </h4>
                      <span>Answered</span>
                    </div>
                    <div className='stats-item'>
                      <h4 className='number mdc-typography--headline4'>
                        {user.questions}
                      </h4>
                      <span>Created</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { users } = state;

  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, questions, answers } = users[id];

        return {
          id,
          name,
          avatarURL,
          questions: questions.length,
          answers: Object.keys(answers).length,
        };
      })
      .sort((a, b) => b.answers + b.questions - (a.answers + a.questions)),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
