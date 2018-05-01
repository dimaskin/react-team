import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
class App extends Component {
  render() {
    return (
      <div className="app container"> 
        
        <header className="app-header">
          <span>React-team</span>
          <button className="btn btn-sm">Создать новый проект</button>
        </header>

        <main className="card">
          <Nav> </Nav>
        </main>
        
      </div>
    );
  }
}

export default App;
