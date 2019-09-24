import React from 'react';
import {  Link } from "react-router-dom";

export default function Welcome () {

    return (
        <form>
          <Link to="/signin" ><button>Sign In</button></Link>
          <button>Guest</button>
          <Link to="/signup"><button>Sign Up</button></Link>
        </form>

    )
}