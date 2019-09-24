import React, { useState } from "react";

const blank = {
    eventName: "",
    image: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    eventDescription: "",
    vendor: ""
}

function CreateEvent () {
    const [input, setInput] = useState(blank);
    console.log({input}, "input results in a cleared state")
    const [vendor, setVendor] = useState([])
    const handleChanges = e => {
        setInput({...input, [e.target.name]: e.target.value});
        console.log({input}, "This is the results of notes after handleChanges setInput")
    }
    const handleChangesVendor = e => {
        setInput({...vendor, [e.target.name]: e.target.value});
        console.log({vendor}, "This is the results of notes after handleChanges setInput")
    }
    const submitForm = e => {
        e.preventDefault();
        // Put a props reference here to set useState to input for parent component
        // console.log({input});
        setInput(blank)
    }
    const addVendor = e => {
        e.preventDefault();
        // Put a props reference here to set useState to input for parent component
        console.log(e);
        setVendor([...vendor, input.vendor])
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" name="eventName" onChange={handleChanges} placeholder="Enter Event Name" value={input.eventName} />
                <input type="text" name="image" onChange={handleChanges} placeholder="Enter Photo URL" value={input.image} />
                <div className="location">
                    <input type="text" name="address" onChange={handleChanges} placeholder="Address" value={input.address}/>  
                    <input type="text" name="city" onChange={handleChanges} placeholder="City" value={input.city}/>  
                    <input type="text" name="state" onChange={handleChanges} placeholder="State" value={input.state}/>
                    <input type="number" name="postal" onChange={handleChanges} placeholder="Postal Code" value={input.postal}/>
                </div>
                <div className="description">
                    <textarea cols="100" name="eventDescription" onChange={handleChanges} placeholder="Enter Event Description" value={input.eventDescription} />
                </div>
                <form onSubmit={addVendor}>
                    <input type="text" name="vendor" onChange={handleChangesVendor} placeholder="Enter Vendor" value={input.vendor} />
                    <button>Add Vendor</button>
                    {vendor.map(e => (<p>{e}</p>))}
                </form>
                <button>Submit</button>
            </form>
        </>
    )
}

export default CreateEvent;