import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Section from './Components/Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Section style={{ marginTop: '50px' }} id="Test1" title="Test1" />
          <Section id="Test2" title="Test2" />
          <Section id="Test3" title="Test3" />
        </Layout>
      </div>
    );
  }
}

export default App;
