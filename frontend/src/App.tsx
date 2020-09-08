import React from 'react';

import { Dashboard } from './components/Dashboard'

export function App() {

  return (
    <div className="app">
      <header className="app-header">
        <Dashboard />
      </header>
    </div>
  );
}
