import * as types from "./types";

export const loggingIn = ({ username, password }) => {
  if (username === "admin" && password === "admin") {
    return (dispatch) => dispatch({ type: types.LOGIN });
  } else {
    return (dispatch) => dispatch({ type: types.LOGIN_ERROR });
  }
};

export const loggingOut = () => {
  return (dispatch) => dispatch({ type: types.LOGOUT });
};
