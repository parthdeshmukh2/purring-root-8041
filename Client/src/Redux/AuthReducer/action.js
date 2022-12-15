import axios from "axios";
import * as types from "./action.types";

const registerUser = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  return axios
    .post("https://ecomm-server.onrender.com/user/register", payload,)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
      console.log(payload);
     
      return types.REGISTER_USER_SUCCESS;
    })
    .catch((e) => {
      dispatch({
        type: types.REGISTER_USER_FAILURE,
        payload: e.response.data.message,
      });
      return types.REGISTER_USER_FAILURE;
    });
};

const loginUser = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  console.log(params, "params")
  axios
    .post("https://ecomm-server.onrender.com/user/login", params)
    .then((res) => {
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data });
      console.log(res.data);
    
      console.log(params)
   
      
    })
    .catch((e) => {
      dispatch({
        type: types.LOGIN_USER_FAILURE,
        payload: e.response.data.message,
      });
    
    });
};

const logoutUser = (payload) => (dispatch) => {
  return dispatch({ type: types.LOGOUT_USER_SUCCESS, payload });
};

export { registerUser, loginUser, logoutUser };
