import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import CreateEvent from "./components/CreateEvent";
import EditForm from "./components/EditForm";
import UserPortfolio from "./components/userComponent/UserPortfolio";
import GuestPortfolio from "./components/GuestPortfolio";
import NavBar from "./components/NavBar";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

function App(props) {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Welcome} />

      <Route path="/signin" {...props} component={SignIn} />
      <Route path="/signup" {...props} component={SignUp} />

      <Route path="/guest" component={GuestPortfolio} />
      <ProtectedRoute path="/userportfolio" component={UserPortfolio} />
      <ProtectedRoute path="/createevent" component={CreateEvent} />
      <ProtectedRoute path="/editevent" component={EditForm} />

      {/* <SignIn/> */}
      {/* <Welcome/> */}
      {/* <SignUp /> */}

      {/* <CreateEvent /> */}
      {/* <GuestPortfolio /> */}

      {/* <Welcome/> */}
      {/* <SignUp /> */}
      {/* <CreateEvent /> */}
      {/* <GuestPortfolio /> */}
    </div>
  );
}

export default App;
