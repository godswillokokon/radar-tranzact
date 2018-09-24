import Axios from "@utils/Axios";
import { BASE_URL } from "@constants/BaseUrl";
import * as types from "../types";

export const login = data => async dispatch => {
  try {
    const response = await Axios.post(`/auth/login`, { ...data });
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
    const response = await Axios.post(`/auth/register`, { ...data });
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
