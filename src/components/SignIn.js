import React, { useState } from "react";
import { connect } from "react-redux";
import { logIn } from "../actions";
import { Link } from "react-router-dom";

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
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
          value={userInfo.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={userInfo.password}
        />
        <button type="submit">Sign in</button>
      </form>

      <Link to="/">
        <button>Back</button>
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
