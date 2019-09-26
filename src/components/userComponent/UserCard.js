import React, { useState } from "react";

export default function UserCard (props) {

    return(
        <div className="card">
        <img src ={props.image} alt ={props.description} width= "100%"/>
        
        <h3>{props.location}</h3>
        <p>Theme: {props.theme}</p>    
        <p>{props.description}</p> 
        <hr/>  
        <h2>Vendors:</h2>
        <ul>
            {props.vendors.map(e =>(
                <li>{e}</li>
            ))}
        </ul>       
    
        <button className='cardButton' onClick ={props.onClick}>Edit</button>
        <button className='cardButton' onClick = {props.onClick}>Delete</button>
        </div>
    )
}

