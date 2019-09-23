import axios from "axios";
import {axiosWithAuth} "../utils/axiosWithAuth";

export const registerUser = (user,history) => {
      return dispatch => {
            dispatch({type: "GET_USER_START"});
                  axios.post(
                        "*http://linkhere*",user
                  ).then(res => {
                        dispatch({type: "GET_USER_SUCCESS", payload: res.data})
                        history.push("/home")
                  }).catch(error => {
                        dispatch({type: "GET_USER_FAILURE", payload: error.data})
                  })
      }
}