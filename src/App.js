import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section style={{ marginTop: '50px' }} id="Test1" title="Test1" />
        <Section id="Test2" title="Test2" />
        <Section id="Test3" title="Test3" />
      </div>
    );
  }
}

export default App;
