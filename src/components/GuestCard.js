import React from 'react';

function GuestCard(props) {
    return (
      <div key={Math.random()} className="card">
          <img src={props.name} />
          <p>Location: {props.name}</p>
          <p>Description: {props.name}</p>
          <p>Theme: {props.name}</p>

            {props.specs.map(e => (
                <li>{e}</li>
            ))}

      </div>
    );
  }
  
  export default GuestCard;