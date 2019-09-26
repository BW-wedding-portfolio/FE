import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import axiosWithAuth from '../../utils/axiosWithAuth'
import CreateEvent from '../CreateEvent';


export default function UserPortfolio () {


       
      



const [user, setUser] = useState([]);
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

