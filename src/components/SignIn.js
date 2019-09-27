import React, { useState } from "react";
import { connect } from "react-redux";
import { logIn } from "../actions";
import { Link } from "react-router-dom";

import { Button, Input } from "../style"

function SignIn(props) {
  console.log(props, "sign in");
  const [userInfo, setUserInfo] = useState(""); // useState({ username: "", password: "" });
  const infoSignIn = {
    username: "",
    password: ""
  };

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(":for class", props);
    e.preventDefault();
    props
      .logIn(userInfo)

      .then(res => {
        if (res) {
          console.log(res);
          props.history.push("/userportfolio");
        } else {
          console.log("else fired");
          alert("Log in failed:please check usernname and password");
        }
      });
  };

  return (
    <>
      {console.log("hello", props)}

      {props.isLogging && <div>Loading</div>}

      {/* {props.error = ""} */}

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
          value={userInfo.username}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={userInfo.password}
        />
        <Button type="submit">Sign in</Button>
      </form>

      <Link to="/">
        <Button>Back</Button>
      </Link>
      {props.error && <div>{props.error.message}</div>}
    </>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isLogging: state.loginReducer.isLogging,
    error: state.loginReducer.error,
    user: state.loginReducer.user
  };
};
export default connect(
  mapStateToProps,
  { logIn }
)(SignIn);
