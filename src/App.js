import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import SignUp from "./components/SignUp"
import CreateEvent from "./components/CreateEvent"
import UserPortfolio from './components/userComponent/UserPortfolio';

function App() {
  return (
    <div className="App">
      <UserPortfolio/>
      <SignIn/>
      <Welcome/>
      <SignUp />
      <CreateEvent />
    </div>
  );
}

export default App;
