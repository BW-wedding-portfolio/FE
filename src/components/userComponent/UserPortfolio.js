import React, { useState } from "react";
import UserCard from './UserCard';
import CreateEvent from '../CreateEvent';

export default function UserPortfolio () {
const [user, setUser] = useState('');

    const editUser = function () {

    };

    return(
        <div>
            <form>
             <button>Log Out</button>          
             <button>Location</button>
             <button>Contact Info</button>   
            </form>
            <CreateEvent/>
            <UserCard onClick={editUser}
            image = {user.image}
            location = {user.location}
            description = {user.description}
            theme = {user.theme}
            vendor = {user.vendor}
            />
        </div>
    )
}

