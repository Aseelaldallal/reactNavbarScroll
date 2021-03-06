import React, { Component } from 'react';
import Auxillary from '../Auxillary';
import Navbar from '../../Components/Navbar/Navbar';
import SideDrawer from '../../Components/Navbar/SideDrawer/SideDrawer';
import './styles.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    console.log('Calling sidedrawer closed');
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxillary>
        <Navbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
