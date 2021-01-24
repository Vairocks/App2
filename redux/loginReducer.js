import * as types from "./types";

const login = (state = { isLoggedIn: false, errorMessage: "" }, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, isLoggedIn: true };

    case types.LOGOUT:
      return { ...state, isLoggedIn: false };
    case types.LOGIN_ERROR:
      return { ...state, errorMessage: "#Hint: username & password :admin" };
    default:
      return state;
  }
};

export default login;
