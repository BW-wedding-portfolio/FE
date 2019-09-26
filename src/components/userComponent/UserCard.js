import React, { useState } from "react";

export default function UserCard(props) {
  console.log("usercard", props);

  return (
    <div className="card">
      <div>
        <img src={props.image} width="100%"/>
      </div>
      <div>
        <h1>{props.event_name}</h1>
        <p>Location: {props.location}</p>
        <p>Description: {props.description}</p>
        <hr/>
        <p>Theme: {props.theme}</p>
        <p>vendors: {props.vendors}</p>
        {/* <ul>Vendors:
                {props.vendor.map(e =>(
                    <li>{e}</li>
                ))}
            </ul>        */}
      </div>
      <button onClick={props.onClick}>Edit</button>
      <button onClick={() => props.Delete(props.event_id)}>Delete</button>
    </div>
  );
}
