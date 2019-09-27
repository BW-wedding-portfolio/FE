import React from "react";
import { NavLink } from "react-router-dom";

import { Nav } from "../style";

function NavBar () {

    return (
        <Nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/guest">Guest</NavLink>
            <NavLink to="/userportfolio">Planner</NavLink>
        </Nav>
    )
}

export default NavBar;