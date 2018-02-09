import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary';
import MenuItem from '../MenuItem/MenuItem';
import './styles.css';

const sideDrawer = props => {
  let attachedClasses = ['SideDrawer', 'Close'];

  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <Auxillary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <a href="#Test1">Test1</a>
        <a href="#Test2">Test2</a>
        <a href="#Test3">Test3</a>
      </div>
    </Auxillary>
  );
};

export default sideDrawer;
