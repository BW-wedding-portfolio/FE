import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import SignUp from "./components/SignUp"
import CreateEvent from "./components/CreateEvent"
import GuestPortfolio from "./components/GuestPortfolio"

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <Welcome/>
      <SignUp />
      <CreateEvent /> */}
      <GuestPortfolio />
    </div>
  );
}

export default App;
