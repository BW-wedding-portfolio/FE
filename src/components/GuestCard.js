import React from 'react';

function GuestCard(props) {
    return (
      <div key={Math.random()} className="card">
          <img src={props.name} />
          <p>Location: {props.name}</p>
          <p>Description: {props.name}</p>
          <p>Theme: {props.name}</p>
          <ul>
            {props.specs.map(e => (
                <li>{e}</li>
            ))}
          </ul>
      </div>
    );
  }
  
  export default GuestCard;