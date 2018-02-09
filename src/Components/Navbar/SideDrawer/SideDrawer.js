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
        <MenuItem to="Test1" name="Test1" clicked={props.closed} />
        <MenuItem to="Test2" name="Test2" clicked={props.closed} />
        <MenuItem to="Test3" name="Test3" clicked={props.closed} />
      </div>
    </Auxillary>
  );
};

export default sideDrawer;
