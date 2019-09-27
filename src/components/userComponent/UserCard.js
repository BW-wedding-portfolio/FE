import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Header2, Paragraph, Button, Card } from "../../style";

export default function UserCard(props) {
  console.log("usercard", props);

  return (
    <Card>
      <div>
        <img src={props.image} width="100%"/>
      </div>
      <div>
        <Header2>{props.event_name}</Header2>
        <Paragraph>Location: {props.location}</Paragraph>
        <Paragraph>{props.description}</Paragraph>
        <hr/>
        <Header2>Theme: {props.theme}</Header2>
        <Paragraph>Vendors: {props.vendor}</Paragraph>
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
        <Button>Edit</Button>
      </Link>

      <Button onClick={() => props.Delete(props.event_id)}>Delete</Button>
    </Card>
  );
}
