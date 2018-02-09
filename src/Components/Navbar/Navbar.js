import React, { Component } from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Auxillary from '../../hoc/Auxillary';
import MenuItem from './MenuItem/MenuItem';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

import './styles.css';

class Navbar extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {});
    Events.scrollEvent.register('end', function(to, element) {});
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
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <div className="navbar">
          <div className="menuItemsContainer">
            <MenuItem to="Test1" name="Test1" />
            <MenuItem to="Test2" name="Test2" />
            <MenuItem to="Test3" name="Test3" />
          </div>
        </div>
      </Auxillary>
    );
  }
}

export default Navbar;
