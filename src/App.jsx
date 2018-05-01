import React, { Component } from 'react';

import Nav from './components/Nav'
import ProjectList from './components/ProjectList/'
import './App.css';


class App extends Component {
  state = {
    projects: this.props.state.projects
  };

  render() {
    return (
      <div className="app container"> 
        
        <header className="app-header">
          <span>React-team</span>
          <button className="btn btn-sm">Создать новый проект</button>
        </header>

        <div className="card">
          <Nav />
          <ProjectList projects={projects} /> 
          
        </div>
        
      </div>
    );
  }
}

export default App;
