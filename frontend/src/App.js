import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from './components/Dashboard.js'

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Dashboard />
        </header>
      </div>
    </Router>
  );
}

export default App;
