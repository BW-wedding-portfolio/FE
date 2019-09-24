import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import SignUp from "./components/SignUp"
import CreateEvent from "./components/CreateEvent"

function App() {
  return (
    <div className="App">
      <SignIn/>
      <Welcome/>
      <SignUp />
      <CreateEvent />
    </div>
  );
}

export default App;
