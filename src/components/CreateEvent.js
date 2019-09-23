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
        </form>
    )
}

export default CreateEvent;