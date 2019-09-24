import React, { useState } from "react";
import UserCard from './UserCard';
import CreateEvent from '../CreateEvent';

export default function UserPortfolio () {
const [user, setUser] = useState('');

    const editUser = function () {

    };

    const deleteUser = function () {

    }

    return(
        <div>
            <h2>{user.name}'s Portfolio</h2>
            <form>
             <button>Log Out</button>          
             <button>Location</button>
             <button>Contact Info</button>   
            </form>
            <CreateEvent/>
            {user.map(e => (
                <UserCard onClick={deleteUser} 
                    image = {user.image}
                    location = {user.location}
                    description = {user.description}
                    theme = {user.theme}
                    vendor = {user.vendor}
                    />
            ))
            }
            
        </div>
    )
}

