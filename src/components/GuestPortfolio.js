import React, { useState, useEffect } from "react";
import GuestCard from "./GuestCard";

const cities = [{name: "CLEVELAND", specs: [1,2,3,4,5]}, {name: "boston",  specs: [1,2,3,4,5]}]

function GuestPortfolio () {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    
    useEffect(() => {
        const transform = cities.filter(e =>
            e.name.toLowerCase().includes(query.toLowerCase())
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
             <>
                 {queryResults.map(e => (
                     <GuestCard {...e}/>
                 ))}
             </>
         </div>
    )
}

export default GuestPortfolio;