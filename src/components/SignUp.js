import React, { useState } from "react";

const blank = {
    username: "",
    password: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    firstname: "",
    lastName: "",
    email: "",
    telephone: ""    
}

function SignUp() {
    const [input, setInput] = useState({blank});
        console.log({input}, "input results before doing anything")
        const handleChanges = e => {
            setInput({...input, [e.target.name]: e.target.value});
            console.log({input}, "This is the results of notes after handleChanges setInput")
        }
        const submitForm = e => {
            e.preventDefault();
            // Put a props reference here to set useState to note for parent component
            console.log({input});
            setInput({blank})
        }
        return(
                <form onSubmit={submitForm}>
                    <input type="text" name="username" onChange={handleChanges} placeholder="Enter Username" />   
                    <input type="password" name="password" onChange={handleChanges} placeholder="Enter Password" />   
                    <div className="location">
                        <input type="text" name="address" onChange={handleChanges} placeholder="Address" />  
                        <input type="text" name="city" onChange={handleChanges} placeholder="City" />  
                        <input type="text" name="state" onChange={handleChanges} placeholder="State" />
                        <input type="number" name="postal" onChange={handleChanges} placeholder="Postal Code" />
                    </div> 
                    <div className="contact">
                        <input type="text" name="firstName" onChange={handleChanges} placeholder="First Name" />
                        <input type="text" name="lastName" onChange={handleChanges} placeholder="Last Name" />
                        <input type="email" name="email" onChange={handleChanges} placeholder="email" />
                        <input type="number" name="telephone" onChange={handleChanges} placeholder="Phone Number" />
                    </div>
                    <button>Submit</button>    
                </form>
        )

}

export default SignUp;