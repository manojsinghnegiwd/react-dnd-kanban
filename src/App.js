import React, { Component } from 'react';

import KanbanGrid from './containers/KanbanGrid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <KanbanGrid />
      </div>
    );
  }
}

export default App;
