import React, { Component } from 'react';

import Nav from './components/Nav'
import ProjectList from './components/ProjectList/'
import './App.css';
const projects = [
  {
    id: 1, 
    title: "website projects", 
    description: "design and build a custom website",
    status: 'active',
    members: []
  }
]

class App extends Component {
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
