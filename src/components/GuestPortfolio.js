import React, { useState, useEffect } from "react";
import GuestCard from "./GuestCard";

const cities = [{name: "CLEVELAND", specs: [1,2,3,4,5]}, {name: "CLEVELAND", specs: [5,4,3,2,1]}, {name: "CLEVELAND", specs: [3,2,1,5,4]}, {name: "CLEVELAND", specs: [4,5,1,3,2]}, {name: "CLEVELAND", specs: [2,5,3,1,2]}, {name: "CLEVELAND", specs: [1,2,3,4,5]}, {name: "CLEVELAND", specs: [5,4,3,2,1]}, {name: "CLEVELAND", specs: [3,2,1,5,4]}, {name: "CLEVELAND", specs: [4,5,1,3,2]}, {name: "CLEVELAND", specs: [2,5,3,1,2]}, {name: "CLEVELAND", specs: [2,5,3,1,2]}, {name: "boston",  specs: [1,2,3,4,5]}]

function GuestPortfolio () {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    
    useEffect(() => {
        const transform = cities.filter(e =>
            e.name.toLowerCase().includes(query)
            );
            setQueryResults(transform);
    }, [query]);

    const handleChange = e => {
        setQuery(e.target.value);
        if (e.target.value===""){
            setQuery("")
        }
    }

    return(
         <div>
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