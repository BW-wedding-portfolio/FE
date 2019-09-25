import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import CreateEvent from '../CreateEvent';


export default function UserPortfolio () {
const data = [
        {
            name: 'Devin',
            image: 'https://i.imgur.com/uH7CF.jpg',
            location: 'Toronto',
            description: 'DLDLDLDLDLDL LDDLDL',
            theme: 'money',
            vendor: ['1', '2', '3', '4', '5']
        },

        {
            name: 'Devin',
            image: 'https://i.imgur.com/uH7CF.jpg',
            location: 'Toronto',
            description: 'DLDLDLDLDLDL LDDLDL',
            theme: 'money',
            vendor: ['1', '2', '3', '4', '5']
        },

        {
            name: 'Devin',
            image: 'https://i.imgur.com/uH7CF.jpg',
            location: 'Toronto',
            description: 'DLDLDLDLDLDL LDDLDL',
            theme: 'money',
            vendor: ['1', '2', '3', '4', '5']
        
        },

        {
            name: 'Devin',
            image: 'https://i.imgur.com/uH7CF.jpg',
            location: 'Toronto',
            description: 'DLDLDLDLDLDL LDDLDL',
            theme: 'money',
            vendor: ['1', '2', '3', '4', '5']
        },

        {
            name: 'Devin',
            image: 'https://i.imgur.com/uH7CF.jpg',
            location: 'Toronto',
            description: 'DLDLDLDLDLDL LDDLDL',
            theme: 'money',
            vendor: ['1', '2', '3', '4', '5']
        }
        ]


const [user, setUser] = useState(data);


    const editUser = function () {

    };

    const deleteUser = function () {

    }

    return(
        <div>
            <h2> User Portfolio</h2>
            <form>
             <button>Log Out</button>          
             <button>Location</button>
             <button>Contact Info</button>   
            <Link to='/createevent'><button>Create Event</button></Link>
            </form>

            {user.map(e => (
                <UserCard 
                    image = {e.image}
                    location = {e.location}
                    description = {e.description}
                    theme = {e.theme}
                    vendor = {e.vendor}
                    />
            ))
            }
            
        </div>
    )
}

