import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pipelineTopicExpression } from "@babel/types";

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
        <p>vendors: {props.vendor}</p>
        {/* <ul>Vendors:
                {props.vendor.map(e =>(
                    <li>{e}</li>
                ))}
            </ul>        */}
      </div>

      <Link
        to={{
          pathname: "/editevent",
          state: {
            event_id: props.event_id,
            event_name: props.event_name,
            event_location: props.location,
            image: props.image,
            theme: props.theme,
            vendor: props.vendor,
            event_description: props.description
          }
        }}
      >
        <button>Edit</button>
      </Link>

      <button onClick={() => props.Delete(props.event_id)}>Delete</button>
    </div>
  );
}