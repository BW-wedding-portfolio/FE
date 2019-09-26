import React from 'react';

function GuestCard(props) {
    return (
      <div key={Math.random()} className="card">
          <img src={props.image} width="100%"/>

            <h2>{props.event_location}</h2>
            <p>Theme: {props.theme}</p>
            <p>{props.event_description}</p>
            <hr/>
            <h2>Vendors:</h2>
            {/* <ul>
                {props.vendors.map(e => (
                    <li>{e}</li>
                ))}
            </ul> */}
        </div>
    );
  }
  
  export default GuestCard;