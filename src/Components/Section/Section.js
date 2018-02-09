import React from 'react';
import './Styles.css';

const Section = props => {
  return (
    <section style={props.style} className="section" id={props.id}>
      {props.title}
    </section>
  );
};

export default Section;
