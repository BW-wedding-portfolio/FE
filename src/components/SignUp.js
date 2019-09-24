import React, { useState } from "react";
import { connect } from "react-redux";
import {registerUser} from '../actions'
import {  Link } from "react-router-dom";


function SignUp(props) {
    const [input, setInput] = useState("");
        console.log({input}, "input results in a cleared state")
        const handleChanges = e => {
            setInput({...input, [e.target.name]: e.target.value});
            console.log({input}, "This is the results of notes after handleChanges setInput")
        }
        const submitForm = e => {
            e.preventDefault();
            props.registerUser(input)
            setInput({
                sername: "",
                password: "",
                address: "",
                city: "",
                state: "",
                postal: "",
                firstname: "",
                lastName: "",
                email: "",
                telephone: ""   ,
            });
            
            
            // Put a props reference here to set useState to input for parent component
            console.log({input});
            setInput(
                {
                    sername: "",
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
            )
        }
        return(
            <>
            {props.isLogging && <div>Loading</div>}
          
                <form onSubmit={submitForm}>
                    <input type="text" name="username" onChange={handleChanges} placeholder="Enter Username" value={input.username}/>   
                    <input type="password" name="password" onChange={handleChanges} placeholder="Enter Password" value={input.password} />   
                    <div className="location">
                        <input type="text" name="address" onChange={handleChanges} placeholder="Address" value={input.address}/>  
                        <input type="text" name="city" onChange={handleChanges} placeholder="City" value={input.city}/>  
                        <input type="text" name="state" onChange={handleChanges} placeholder="State" value={input.state}/>
                        <input type="number" name="postal" onChange={handleChanges} placeholder="Postal Code" value={input.postal}/>
                    </div> 
                    <div className="contact">
                        <input type="text" name="firstName" onChange={handleChanges} placeholder="First Name" value={input.firstName} />
                        <input type="text" name="lastName" onChange={handleChanges} placeholder="Last Name" value={input.lastName} />
                        <input type="email" name="email" onChange={handleChanges} placeholder="email" value={input.email} />
                        <input type="number" name="telephone" onChange={handleChanges} placeholder="Phone Number" value={input.telephone} />
                    </div>
                    <button>Submit</button>    
                </form>
                 <Link to="/" ><button>Back</button></Link>
                 
                 {props.error &&  <div>{props.error.message}</div> }
                 </>
        )

}

const mapStateToProps = state => {
    return {
      user: state.registerReducer.user,
      isRegistering: state.registerReducer.isRegistering,
      error: state.registerReducer.error

    };
  };
export default connect(mapStateToProps, {registerUser})(SignUp);