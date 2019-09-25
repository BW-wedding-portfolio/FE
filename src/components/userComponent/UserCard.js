import React, { useState } from "react";

export default function UserCard (props) {

    return(
        <>
        <div>
            <img src ={props.image} alt ={props.description}/>
        </div>
        <div>
            <h3>Location: {props.location}</h3>
            <p>Description: {props.description}</p>   
            <p>Theme: {props.theme}</p>    
            <ul>Vendors:
                {props.vendor.map(e =>(
                    <li>{e}</li>
                ))}
            </ul>       
        </div>
        <button onClick ={props.onClick}>Edit</button>
        <button onClick = {props.onClick}>Delete</button>
        </>
    )
}

