import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function CreateEvent(props) {
  const [input, setInput] = useState({
    event_description: "",
    event_location: "",
    event_name: "",
    img_url: "",
    theme: "",
    vendors: ""
  });
  // console.log({input}, "input results in a cleared state")

  const handleChanges2 = e => {
    console.log("I am in handleChanges2).");
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log({input}, "This is the results of notes after handleChanges setInput")
    console.log("handleChanges2 Input: ", input);
  };

  const submitForm = e => {
    e.preventDefault();

    axiosWithAuth()
      .get(`https://wedding-portfolio-bw.herokuapp.com/planners/`)
      .then(res => {
        console.log(res);
        const id = res.data.id;
        axiosWithAuth()
          .post(
            `https://wedding-portfolio-bw.herokuapp.com/events/${id}/events`,
            input
          )
          .then(res => {
            console.log("Post Event: ", res);
            props.history.push("/userportfolio");
          })
          .catch(err => console.log("Post Event Error: ", err.respone));
      });

    setInput({
      event_description: "",
      event_location: "",
      event_name: "",
      img_url: "",
      theme: "",
      vendors: ""
    });
  };
  // const addVendor = e => {
  //     e.preventDefault();
  //     // Put a props reference here to set useState to input for parent component
  //     console.log(e);
  //     setVendor([...vendor, input.vendor])
  //     setInput({vendor:""})
  // }
  // const deleteVendor = e => {
  //     e.preventDefault();
  //     setVendor(vendor.slice(0, vendor.length-1))
  // }

  return (
    <>
      <form onSubmit={submitForm} className="createEventForm">
        {console.log("Test: ", input.event_name)}
        <input
          type="text"
          name="event_name"
          onChange={handleChanges2}
          placeholder="Enter Event Name"
          value={input.event_name}
        />
        <input
          type="text"
          name="img_url"
          onChange={handleChanges2}
          placeholder="Enter Photo URL"
          value={input.img_url}
        />

        <div className="location">
          <input
            type="text"
            name="event_location"
            onChange={handleChanges2}
            placeholder="City"
            value={input.event_location}
          />
        </div>
        <input
          type="text"
          name="theme"
          onChange={handleChanges2}
          placeholder="Theme"
          value={input.theme}
        />
        <div className="description">
          <textarea
            cols="100"
            name="event_description"
            onChange={handleChanges2}
            placeholder="Enter Event Description"
            value={input.event_description}
          />
        </div>

        <input
          type="text"
          name="vendors"
          onChange={handleChanges2}
          placeholder="Enter Vendors"
          value={input.vendors}
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default CreateEvent;

