import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateEvent () {
    const [input, setInput] = useState("");


    const handleChanges = e => {
        setInput({...input, [e.target.name]: e.target.value});
        console.log({input}, "This is the results of notes after handleChanges setInput")
    }

    const submitForm = e => {
        e.preventDefault();
        // Put a props reference here to set useState to input for parent component
        // console.log({input});
        setInput(
            {
                event_name: "",
                img_url: "",
                event_location: "",
                event_description: "",
                vendors: "",
                theme: ""
            }
        )
    }

    return (
        <>
            <form onSubmit={submitForm} className="createEventForm">
                <input type="text" name="eventName" onChange={handleChanges} placeholder="Enter Event Name" value={input.event_name} />
                <input type="text" name="image" onChange={handleChanges} placeholder="Enter Photo URL" value={input.img_url} />
                <div className="location">
                    <input type="text" name="city" onChange={handleChanges} placeholder="City" value={input.event_location}/>  
                </div>
                <div className="description">
                    <textarea cols="100" name="eventDescription" onChange={handleChanges} placeholder="Enter Event Description" value={input.event_description} />
                </div>
                <div>
                    <input type="text" name="vendor" onChange={handleChanges} placeholder="Enter Vendors" value={input.vendors} />
                    <input type="text" name="theme" onChange={handleChanges} placeholder="Enter Theme" value={input.theme} />
                </div>
                <button>Submit</button>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </form>
        </>
    )
}

export default CreateEvent;





//////////// The component below shows how I originally wanted to attempt this form: Being able to add/delete vendors and passing it as an array.
// import React, { useState } from "react";

// function CreateEvent () {
//     const [input, setInput] = useState("");
//     console.log({input}, "input results in a cleared state")
//     const [vendor, setVendor] = useState([])
//     const handleChanges = e => {
//         setInput({...input, [e.target.name]: e.target.value});
//         console.log({input}, "This is the results of notes after handleChanges setInput")
//     }
//     const handleChangesVendor = e => {
//         setInput({...vendor, [e.target.name]: e.target.value});
//         console.log({vendor}, "This is the results of notes after handleChanges setInput")
//     }
//     const submitForm = e => {
//         e.preventDefault();
//         setVendor([]);
//         // Put a props reference here to set useState to input for parent component
//         // console.log({input});
//         setInput(
//             {
//                 event_name: "",
//                 img_url: "",
//                 event_location: "",
//                 event_description: "",
//                 vendors: ""
//             }
//         )
//     }
//     const addVendor = e => {
//         e.preventDefault();
//         // Put a props reference here to set useState to input for parent component
//         console.log(e);
//         setVendor([...vendor, input.vendor])
//         setInput({vendor:""})
//     }
//     const deleteVendor = e => {
//         e.preventDefault();
//         setVendor(vendor.slice(0, vendor.length-1))
//     }

//     return (
//         <>
//             <form onSubmit={submitForm} className="createEventForm">
//                 <input type="text" name="eventName" onChange={handleChanges} placeholder="Enter Event Name" value={input.eventName} />
//                 <input type="text" name="image" onChange={handleChanges} placeholder="Enter Photo URL" value={input.image} />
//                 <div className="location">
//                     <input type="text" name="city" onChange={handleChanges} placeholder="City" value={input.city}/>  
//                 </div>
//                 <div className="description">
//                     <textarea cols="100" name="eventDescription" onChange={handleChanges} placeholder="Enter Event Description" value={input.eventDescription} />
//                 </div>
//                 <form>
//                     <input type="text" name="vendor" onChange={handleChangesVendor} placeholder="Enter Vendor" value={input.vendor} />
//                     <button onClick={addVendor}>Add Vendor</button><button onClick={deleteVendor}>Delete</button>
//                     <div className="vendorBox">
//                         {vendor.map(e => (<p>{e}</p>))}
//                     </div>
//                 </form>
//                 <button>Submit</button>
//             </form>
//         </>
//     )
// }

// export default CreateEvent;