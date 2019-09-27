import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import { Link } from "react-router-dom";

import { Button, Input } from "../style"

function SignUp(props) {
  const [input, setInput] = useState("");
  console.log({ input }, "input results in a cleared state");
  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(
      { input },
      "This is the results of notes after handleChanges setInput"
    );
  };
  const submitForm = e => {
    e.preventDefault();
    props
      .registerUser(input)

      .then(res => {
        if (res) {
          console.log(res, "im res");
          props.history.push("/");
        } else {
          console.log("else fired");
          window.alert("sign up failed");
        }
      });

    setInput({
      username: "",
      password: "",
      location: "",
      last_name: "",
      email: "",
      first_name: ""
    });

    // Put a props reference here to set useState to input for parent component
    // console.log({input});
    // setInput(
    //     {
    //         username: "",
    //         password: "",
    //         location:"",

    //         lastName: "",
    //         email: "",

    //     }
    // )
  };
  return (
    <>
      {props.isLogging && <div>Loading</div>}

      <form onSubmit={submitForm}>
        <Input
          type="text"
          name="username"
          onChange={handleChanges}
          placeholder="Enter Username"
          value={input.username}
        />
        <Input
          type="password"
          name="password"
          onChange={handleChanges}
          placeholder="Enter Password"
          value={input.password}
        />
        <div className="location">
          <Input
            type="text"
            name="location"
            onChange={handleChanges}
            placeholder="City"
            value={input.location}
          />
        </div>
        <div className="contact">
          <Input
            type="text"
            name="first_name"
            onChange={handleChanges}
            placeholder="First Name"
            value={input.first_name}
          />
          <Input
            type="text"
            name="last_name"
            onChange={handleChanges}
            placeholder="Last Name"
            value={input.last_name}
          />
          <Input
            type="email"
            name="email"
            onChange={handleChanges}
            placeholder="email"
            value={input.email}
          />
        </div>
        <Button>Submit</Button>
      </form>
      <Link to="/">
        <Button>Back</Button>
      </Link>

      {props.error && <div>{props.error.message}</div>}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.registerReducer.user,
    isRegistering: state.registerReducer.isRegistering,
    error: state.registerReducer.error
  };
};
export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp);
