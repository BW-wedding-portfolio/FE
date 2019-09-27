import React from 'react';

import { Header2, Paragraph, Card } from "../style";

function GuestCard(props) {
    return (
      <Card key={Math.random()}>
          <img src={props.img_url} width="100%"/>

            <Header2>{props.event_location}</Header2>
            <Paragraph>Theme: {props.theme}</Paragraph>
            <Paragraph>{props.event_description}</Paragraph>
            <hr/>
            <Header2>Vendors:</Header2>
            <Paragraph>{props.vendors}</Paragraph>
            {/* Below shows how I was going to map out vendors from an array rather than one string with all vendors entered by the end-user */}
            {/* <ul>
                {props.vendors.map(e => (
                    <li>{e}</li>
                ))}
            </ul> */}
        </Card>
    );
  }
  
  export default GuestCard;