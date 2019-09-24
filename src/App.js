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
      {/* <SignIn/> */}
      {/* <Welcome/> */}
      {/* <SignUp /> */}
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <CreateEvent /> */}
      {/* <GuestPortfolio /> */}
=======
>>>>>>> 6b307f9922ab35744dcf43d77d334db325a5960b
=======

      {/* <CreateEvent /> */}
      {/* <GuestPortfolio /> */}
>>>>>>> 306b284798ce4855cbc449f1bc8c6f74de74aeb7
    </div>
  );
}

export default App;
