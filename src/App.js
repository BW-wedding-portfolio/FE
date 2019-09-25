import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import SignUp from "./components/SignUp"
import CreateEvent from "./components/CreateEvent"
import UserPortfolio from './components/userComponent/UserPortfolio';
import GuestPortfolio from "./components/GuestPortfolio"
import {  Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={Welcome} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/guest" component={GuestPortfolio} />

      {/* <SignIn/> */}
      {/* <Welcome/> */}
      {/* <SignUp /> */}

      {/* <CreateEvent /> */}
      {/* <GuestPortfolio /> */}



    </div>
  );
}

export default App;
