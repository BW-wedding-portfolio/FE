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
        <p>{props.location}</p>
        <p>{props.description}</p>
        <hr/>
        <p>Theme: {props.theme}</p>
        <p>Vendors: {props.vendors}</p>
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