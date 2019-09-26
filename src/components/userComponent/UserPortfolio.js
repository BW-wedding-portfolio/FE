import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import axiosWithAuth from '../../utils/axiosWithAuth'
import CreateEvent from '../CreateEvent';

const data  = [
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/adkDDIz.jpg"}
    ,
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/gyeOxYB.jpg"}
    ,
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/cOKc5nA.jpg"}
    ,
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/4Ayekp0.jpg"}
    ,
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/ZnDvms6.jpg"}
    ,
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/bSEXnen.jpg"}
    ,
    {location: "Cleveland", 
    vendors: ["JimBob Photography", "BobJim Catering", "LeBob DeJim Pastry", "DJ Jim-to-the-Bob"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "50,000 BC",
    image: "https://i.imgur.com/1trKjRL.jpg"}
    ,
    {location: "Boston", 
    vendors: ["Tom Brady lookalike Chip N Dales", "Chowder Catering", "Matt Daemon"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "Tea Party",
    image: "https://i.imgur.com/bVzAXus.jpg"}
    ,
    {location: "Boston", 
    vendors: ["Tom Brady lookalike Chip N Dales", "Chowder Catering", "Matt Daemon"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "Tea Party",
    image: "https://i.imgur.com/bVzAXus.jpg"}
    ,
    {location: "Boston", 
    vendors: ["Tom Brady lookalike Chip N Dales", "Chowder Catering", "Matt Daemon"], 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    theme: "Tea Party",
    image: "https://i.imgur.com/LkJgrLb.jpg"}]

export default function UserPortfolio () {


       
      

const [user, setUser] = useState();
const [userInfo, setUserInfo] = useState([]);
    
    const editUser = function () {

    };

    const deleteUser = function () {

    }

    // useEffect(() => {
    //     axiosWithAuth()
    //       .get(`https://wedding-portfolio-bw.herokuapp.com/${}/events`)
    //       .then(res => {
    //         setUser(res.data)
    //       })
    //       .catch(err => console.log(err.respone));
    //   }, []);
    
    return(
        <div>
        <div>
            
            <h2>{userInfo.name}'s Portfolio</h2> 
            <h3>Location {userInfo.city}</h3>
            <h3>Contact Info</h3> 
            <h3>Phone Number {userInfo.phonenumber}</h3>
            <h3>Email {userInfo.email}</h3>
        </div>
            <h2>User Portfolio</h2>
            <form>
             <button>Log Out</button>          
             <button>Location</button>
             <button>Contact Info</button>   
            <Link to='/createevent'><button>Create Event</button></Link>
            </form>
            <div className="card-container">
            {data.map(e => (
                <UserCard 
                    {...e}
                    />
            ))
            }
            </div>
            
        </div>
    )
}

