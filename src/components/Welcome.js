import React from 'react';
import {  Link } from "react-router-dom";
import logo  from "../images/logo.png"

import { WelcomeForm, WelcomeButton, LogoWelcome } from "../style";

export default function Welcome () {

    return (
      
      <div>
      <LogoWelcome src={logo} />
        <WelcomeForm>
          <WelcomeButton><Link to="/signin" >Sign In</Link></WelcomeButton>
          <WelcomeButton><Link to="/signup">Sign Up</Link></WelcomeButton>
          <WelcomeButton><Link to="/guest">Guest</Link></WelcomeButton>
        </WelcomeForm>
      </div>

    )
}