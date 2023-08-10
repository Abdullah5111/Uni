// src/App.js
import React from 'react';
import Login from './components/Login'; // Import the LoginForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login /> {/* Render the Login component */}
      </header>
    </div>
  );
}

export default App;
