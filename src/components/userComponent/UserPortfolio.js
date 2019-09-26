import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import axiosWithAuth from "../../utils/axiosWithAuth";
import CreateEvent from "../CreateEvent";
import { connect } from "react-redux";
import axios from "axios";
function UserPortfolio() {
  const Delete = event_id => {
    const id = localStorage.getItem("id");
    axios
      .delete(
        `https://wedding-portfolio-bw.herokuapp.com/events/${id}/events/${event_id}`
      )
      .then(res => {
        getAllEventsByCurrentPlanner();
        console.log("delete response: ", res);
      })

      .catch(err => console.log(err));
  };


  // const Edit = event_id => {
  //   const id = localStorage.getItem("id");
  //   axios
  //     .delete(
  //       `https://wedding-portfolio-bw.herokuapp.com/events/${id}/events/${event_id}`,
  //     )
  //     .then(res => {
  //       getAllEventsByCurrentPlanner();
  //       console.log("delete response: ", res);
  //     })

  //     .catch(err => console.log(err));
  // };
  const [info, setInfo] = useState("");


  useEffect(() => {
    axiosWithAuth()
      .get(`https://wedding-portfolio-bw.herokuapp.com/planners/`)
      .then(res => {
        console.log("thisa is what we need ", res);
        setInfo(res.data);
        const id = res.data.id;
        localStorage.setItem("id", id);
        getAllEventsByCurrentPlanner();
      })
      .catch(err => console.log(err.respone));
  }, []);

  const [user, setUser] = useState([]);

  const createNewEvent = () => {
    axiosWithAuth()
      .get(`https://wedding-portfolio-bw.herokuapp.com/planners/`)
      .then(res => {
        console.log(res);
        const id = res.data.id;
        axiosWithAuth()
          .post(
            `https://wedding-portfolio-bw.herokuapp.com/events/${id}/events`,
            user
          )
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err.respone));
      });
  };

  const getAllEventsByCurrentPlanner = () => {
    console.log("getAllEventsByCurrentPlanner().");
    const id = localStorage.getItem("id");
    axiosWithAuth()
      .get(`https://wedding-portfolio-bw.herokuapp.com/events/${id}/events`)
      .then(res => {
        console.log("get all", res);
        setUser(res.data);
      })
      .catch(err => console.log("events by id: ", err.response));
  };

  // React.useEffect(() => {
  //use this to get current user id
  //     axiosWithAuth()
  //       .get(`https://wedding-portfolio-bw.herokuapp.com/planners/`)
  //       .then(res => {
  //           const id = res.data.id;
  // //           // console.log(id);
  // //         //   console.log(res.data.id)
  //         axiosWithAuth()
  //       .post(`https://wedding-portfolio-bw.herokuapp.com/events/${id}/events`, newEvent)
  //       .then(res => {
  //     console.log(res)
  // //     console.log('here');

  // })
  // // // .catch(err => console.log(err.respone));
  // }

  //       .catch(err => console.log(err.respone));

  //   axiosWithAuth()
  //   .get(`https://wedding-portfolio-bw.herokuapp.com/events/50/events`)
  //   .then(res => {
  // console.log(res)
  // console.log('here');
  // setUser(res.data)
  // })
  // .catch(err => console.log(err.respone));
  // setUser(res.data)

  //use this to get ALL events
  // axiosWithAuth()
  //   .get(`https://wedding-portfolio-bw.herokuapp.com/events/`)
  //   .then(res => {
  //       console.log(res)
  //     // setUser(res.data)
  //   })
  //   .catch(err => console.log(err.respone));
  //   }, []);

  const test = () => {
    const newEvent = {
      event_name: "New Event",
      event_description: "Event...",
      event_location: "Paris",
      theme: "Who knows"
    };
  };
  //     axiosWithAuth()
  //       .post(`https://wedding-portfolio-bw.herokuapp.com/events/50/events`, newEvent)
  //       .then(res => {
  //     console.log(res)
  //     console.log('here');

  // })
  // .catch(err => console.log(err.respone));
  // }
  // useEffect(() => {
  //     getAllEventsByCurrentPlanner()
  //     console.log("useefeect ")
  //   },[] );
  console.log("ima user", user);
  return (

    <div className="guestPortfolio">
      <h2> User Portfolio</h2>
      <form>
        <button onClick={() => localStorage.clear}>Log Out</button>
        <button>Location</button>
        <button>Contact Info</button>
        <Link to="/createevent">
          <button>Create Event</button>
        </Link>

      </form>
      
      <div className="card-container">
        {user.map(e => (
          <UserCard
            Delete={Delete}
            event_id={e.event_id}
            event_name={e.event_name}
            image={e.img_url}
            location={e.event_location}
            description={e.event_description}
            theme={e.theme}
            vendor={e.vendors}
          />
        ))}
      </div>

    </div>
  );
}

export default connect(
  null,
  {}
)(UserPortfolio);