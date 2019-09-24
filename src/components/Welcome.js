import React from 'react';
import {  Link } from "react-router-dom";
import logo  from "../images/logo.png"

export default function Welcome () {

    return (
      
      <div>
      <img className="logoWelcome" src={logo} />
        <form className="welcomeForm">
          

          <Link className="welcomeButton" to="/signin" >Sign In</Link>
          
          <Link className="welcomeButton" to="/signup">Sign Up</Link>
          <a className="welcomeButton" href="">Guest</a>
        </form>
        </div>

    )
}