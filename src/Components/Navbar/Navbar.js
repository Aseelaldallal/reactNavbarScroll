import React, { Component } from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Auxillary from '../../hoc/Auxillary';
import MenuItem from './MenuItem/MenuItem';

import './styles.css';

class Navbar extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  render() {
    return (
      <Auxillary>
        <div className="navbar">
          <MenuItem to="Test3" name="Test3" />
          <MenuItem to="Test2" name="Test2" />
          <MenuItem to="Test1" name="Test1" />
        </div>
      </Auxillary>
    );
  }
}

export default Navbar;
