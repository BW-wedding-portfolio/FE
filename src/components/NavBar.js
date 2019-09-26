import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {

    return (
        <div className="navbar">
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/guest">Guest</NavLink>
            <NavLink to="/createevent">Create Event</NavLink>
        </div>
    )
}

export default NavBar;