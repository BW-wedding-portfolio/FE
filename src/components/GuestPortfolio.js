import React, { useState, useEffect } from "react";
import GuestCard from "./GuestCard";
import axios from "axios";

import { Portfolio, CardContainer, Input } from "../style";



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
         <Portfolio>
             <form>
                 <Input
                    type="text"
                    value={query}
                    name="search"
                    id="search"
                    placeholder="Search City"
                    onChange={handleChange}
                />
             </form>
             <CardContainer>
                 {queryResults.map(e => (
                     <GuestCard {...e}/>
                 ))}
             </CardContainer>
         </Portfolio>
    )
}

export default GuestPortfolio;