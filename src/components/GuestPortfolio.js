import React, { useState } from "react";
import GuestCard from "./GuestCard";

function GuestPortfolio () {
    const [query, setQuery] = useState("");
    return(
         <div>
             <form>
                 <input
                    type="text"
                    onChange={null}
                    value={query}
                    name="search"
                    placeholder="Enter City"
                />
             </form>
             <button>Sign Up</button>
             {/* Create and Map out GuestCard component */}
         </div>
    )
}

export default GuestPortfolio;