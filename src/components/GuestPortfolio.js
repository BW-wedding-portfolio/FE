import React, { useState, useEffect } from "react";
import GuestCard from "./GuestCard";
import axios from "axios";

const cities = [{name: "CLEVELAND", specs: [1,2,3,4,5]}, {name: "CLEVELAND", specs: [5,4,3,2,1]}, {name: "CLEVELAND", specs: [3,2,1,5,4]}, {name: "CLEVELAND", specs: [4,5,1,3,2]}, {name: "CLEVELAND", specs: [2,5,3,1,2]}, {name: "CLEVELAND", specs: [1,2,3,4,5]}, {name: "CLEVELAND", specs: [5,4,3,2,1]}, {name: "CLEVELAND", specs: [3,2,1,5,4]}, {name: "CLEVELAND", specs: [4,5,1,3,2]}, {name: "CLEVELAND", specs: [2,5,3,1,2]}, {name: "CLEVELAND", specs: [2,5,3,1,2]}, {name: "boston",  specs: [1,2,3,4,5]}]

function GuestPortfolio () {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://wedding-portfolio-bw.herokuapp.com/planner/')
            .then(res => {
                console.log(res)
                const data = res.data
                const transform = data.filter(e =>
                    e.name.toLowerCase().includes(query)
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