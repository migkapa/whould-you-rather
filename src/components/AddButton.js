import React from 'react';
import { NavLink } from 'react-router-dom';
function AddButton() {
  return (
    <NavLink to="/add">
      <div className='add-button mdc-fab mdc-fab--extended mdc-ripple-upgraded'>
        <div className='mdc-fab__ripple'></div>
        <i className='mdc-fab__icon material-icons'>add</i>
        <span className='mdc-fab__label'>Add Question</span>
      </div>
    </NavLink>
  );
}

export default AddButton;
