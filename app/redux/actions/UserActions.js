import axios from "axios";
import { BASE_URL } from "@constants/BaseUrl";
import * as types from "../types";

export const login = data => async dispatch => {
  try {
    console.log(data)
    const response = await axios.post(`${BASE_URL}/auth/login`, { ...data });
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: response.data
    });
    console.log(response)
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response.data.message
    });
  }
};

export const resetFailureAction = () => dispatch => {
  dispatch({
    type: "USER_AUTH_ERROR",
    payload: null
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: "USER_LOGIN_SUCCESS",
    payload: null
  });
};

export const createAccount = data => async dispatch => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, { ...data });
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response.data.message
    });
  }
};
