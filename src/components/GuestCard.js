import React from 'react';

function GuestCard(props) {
    return (
      <div key={Math.random()} className="card">
          <img src={props.name} />
          <h2>Location:</h2>
          <p> {props.name}</p>
          <h2>Description:</h2>
          <p> {props.name}</p>
          <h2>Theme:</h2>
          <p> {props.name}</p>
          <ul>
            {props.specs.map(e => (
                <li>{e}</li>
            ))}
          </ul>
      </div>
    );
  }
  
  export default GuestCard;