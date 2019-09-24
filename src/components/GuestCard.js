import React from 'react';

function GuestCard(props) {
    return (
      <div>
          <img src={props.image} />
          <p>Location: {props.location}</p>
          <p>Description: {props.description}</p>
          <p>Theme: {props.theme}</p>
          <ul>
              {props.vendors(e => {
                  return (
                      <li>{e}</li>
                  )
              })}
          </ul>
      </div>
    );
  }
  
  export default GuestCard;