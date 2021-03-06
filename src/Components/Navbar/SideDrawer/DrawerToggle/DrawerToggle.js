import React from 'react';
import './styles.css';

const drawerToggle = props => {
  return (
    <div className="drawerToggleBar">
      <div className="drawerToggle" onClick={props.clicked}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default drawerToggle;
