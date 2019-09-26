import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function EditForm(props) {
  console.log(props);
  const [input, setInput] = useState({
    event_description: props.history.location.state.event_description,
    event_location: props.history.location.state.event_location,
    event_name: props.history.location.state.event_name,
    img_url: props.history.location.state.image,
    theme: props.history.location.state.theme,
    vendors: props.history.location.state.vendor
  });

  //   // console.log({input}, "input results in a cleared state")

  const handleChanges2 = e => {
    console.log("I am in handleChanges2).");
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log({input}, "This is the results of notes after handleChanges setInput")
    console.log("handleChanges2 Input: ", input);
  };

  const submitForm = e => {
    e.preventDefault();
    console.log("input gvergrgtr", input);

    const id = localStorage.getItem("id");
    axiosWithAuth()
      .put(
        `https://wedding-portfolio-bw.herokuapp.com/events/${id}/events/${props.history.location.state.event_id}`,
        input
      )
      .then(res => {
        console.log("Post Event: ", res);
        props.history.push("/userportfolio");
      })
      .catch(err => {
        console.log("Post Event Error: ", err.respone);
        alert("failed to update event");
      });
    //   });

    setInput({
      event_description: "",
      event_location: "",
      event_name: "",
      img_url: "",
      theme: "",
      vendors: ""
    });
  };

  return (
    <form onSubmit={submitForm}>
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

      <input
        type="text"
        name="event_location"
        onChange={handleChanges2}
        placeholder="City"
        value={input.event_location}
      />
      <input
        type="text"
        name="theme"
        onChange={handleChanges2}
        placeholder="theme"
        value={input.theme}
      />
      <textarea
        cols="100"
        name="event_description"
        onChange={handleChanges2}
        placeholder="Enter Event Description"
        value={input.event_description}
      />

      <input
        type="text"
        name="vendors"
        onChange={handleChanges2}
        placeholder="Enter Vendors"
        value={input.vendors}
      />

      <button>Submit</button>
    </form>
  );
}

export default EditForm;
