import React, { useState, useEffect } from "react";
import GuestCard from "./GuestCard";
import axios from "axios";

const cities = [
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
image: "https://imgur.com/B9GVDJE.jpg"}
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

function GuestPortfolio () {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    
    useEffect(() => {

                
        axios
            .get('https://wedding-portfolio-bw.herokuapp.com/events/')
            .then(res => {
                console.log(res);
                const data = res.data;
                const transform = data.filter(e =>
                    e.event_location.toLowerCase().includes(query)
                    );
                setQueryResults(transform);
            })
            .catch(error => {
                console.log("API data was not returned", error)
            })
            
    }, [query]); 

    const handleChange = e => {
        setQuery(e.target.value);
        if (e.target.value===""){
            setQuery("")
        }
    }

  
    return(
         <div className="guestPortfolio">
             <form>
                 <input
                    type="text"
                    value={query}
                    name="search"
                    id="search"
                    placeholder="Search City"
                    onChange={handleChange}
                />
             </form>
             <button>Sign Up</button>
             <div className="card-container">
                 {queryResults.map(e => (
                     <GuestCard {...e}/>
                 ))}
             </div>
         </div>
    )
}

export default GuestPortfolio;