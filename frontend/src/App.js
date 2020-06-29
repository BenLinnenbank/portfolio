import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.js'
import Animation from './components/Animation.js'
import './App.css';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [animationDone, setAnimationDone] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {animationDone
          ? <Dashboard />
          : <Animation onClick={setAnimationDone} />
        }
      </header>
    </div>
  );
}

export default App;
