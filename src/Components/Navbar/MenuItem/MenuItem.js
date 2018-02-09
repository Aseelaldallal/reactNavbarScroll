import React from 'react';
import './styles.css';
import { Link } from 'react-scroll';

const MenuItem = props => {
  return (
    <Link
      className="menuItem"
      activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      {props.name}
    </Link>
  );
};

export default MenuItem;
