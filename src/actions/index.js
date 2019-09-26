import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const LOG_USER_START = "LOG_USER_START";
export const LOG_USER_SUCCESS = "LOG_USER_SUCCESS";
export const LOG_USER_FAILURE = "LOG_USER_FAILURE";

// export const EDIT_USER_START = "EDIT_USER_START"
// export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
// export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE"

export const registerUser = user => {
  return dispatch => {
    dispatch({ type: GET_USER_START });
    return axios
      .post("https://wedding-portfolio-bw.herokuapp.com/auth/register", user)
      .then(res => {
        return dispatch(
          { type: GET_USER_SUCCESS, payload: res.data },
          console.log("hello", res)
        );
      })
      .catch(error => {
        dispatch({ type: GET_USER_FAILURE, payload: error });
      });
  };
};
export const logIn = user => {
  return dispatch => {
    dispatch({ type: LOG_USER_START });
    return axios
      .post("https://wedding-portfolio-bw.herokuapp.com/auth/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log("got", res);
        return dispatch({ type: LOG_USER_SUCCESS, payload: res.data });
      })
      .catch(error => {
        console.log(error.message);
        dispatch({ type: LOG_USER_FAILURE, payload: error });
      });
  };
};
// export const editCard = (card,history) => {
//       return dispatch => {
//             dispatch({type: Edit_USER_START});
//                   axios.post(
//                         "*http://linkhere*",card
//                   ).then(res => {
//                         dispatch({type: Edit_USER_SUCCESS, payload: res.data})
//                         history.push("/portfolio:id")
//                   }).catch(error => {
//                         dispatch({type: Edit_USER_FAILURE, payload: error.data})
//                   })
//       }
// }

// export const deleteCard = (id) => {
//       return dispatch => {
//             dispatch({type: LOG_USER_START});
//                   axios.delete(
//                         `https://wedding-portfolio-bw.herokuapp.com/events/:id/events/${}`
//                   ).then(res => {
//                         dispatch({type: LOG_USER_SUCCESS, payload: res.data})
//                   }).catch(error => {
//                         dispatch({type: LOG_USER_FAILURE, payload: error.data})
//                   })
//       }
// }
