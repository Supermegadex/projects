import React, { Component } from 'react';
import { Typography } from 'material-ui';
import Projects from './projects/Projects';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="root">
        
        <Projects className="section" id="projects" />
      </div>  
    );
  }
}

export default App;
