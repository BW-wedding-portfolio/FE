import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
    <SignIn/>
    <Welcome/>
    </div>
  );
}

export default App;
