import React, { useState } from "react";

function CreateEvent () {
    const [input, setInput] = useState("");
    console.log({input}, "input results in a cleared state")
    const handleChanges = e => {
        setInput({...input, [e.target.name]: e.target.value});
        console.log({input}, "This is the results of notes after handleChanges setInput")
    }
    const submitForm = e => {
        e.preventDefault();
        // Put a props reference here to set useState to input for parent component
        console.log({input});
        setInput("")
    }
    return (
        <form>
            <input type="text" name="eventName" onChange={handleChanges} placeholder="Enter Event Name" value={input.eventName} />
            <input type="text" name="image" onChange={handleChanges} placeholder="Enter Photo URL" value={input.eventName} />
            <div className="location">
                <input type="text" name="address" onChange={handleChanges} placeholder="Address" value={input.address}/>  
                <input type="text" name="city" onChange={handleChanges} placeholder="City" value={input.city}/>  
                <input type="text" name="state" onChange={handleChanges} placeholder="State" value={input.state}/>
                <input type="number" name="postal" onChange={handleChanges} placeholder="Postal Code" value={input.postal}/>
            </div>
            <div className="description">
                <textarea cols="100" name="eventDescription" onChange={handleChanges} placeholder="Enter Event Description" value={input.eventName} />
            </div>
            <div className="vendor">
                <input type="text" name="vendor" onChange={handleChanges} placeholder="Enter Vendor" value={input.vendor} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default CreateEvent;