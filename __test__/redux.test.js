import { loggingIn, loggingOut } from "../redux/actionCreator";
import { store } from "../redux/createStore";
import login from "../redux/loginReducer";
import { exp } from "react-native-reanimated";

describe("check login reducer", () => {
  it("should return initial state when action type is undefined", () => {
    const mockStore = store;
    new Promise((resolve) => {
      mockStore.dispatch({ type: "undefined" });
    }).then(() => {
      const newState = mockStore.getState();
      expect(newState.isLoggedIn).toBeFalsy;
      expect(newState.errorMessage).toBeFalsy;
    });
  });
});

describe("check login and logout actions", () => {
  it("should return new state with isloggedin false and error message", () => {
    const mockStore = store;
    new Promise((resolve) => {
      mockStore.dispatch(login({ username: "abc", password: "xyz" }));
    }).then(() => {
      const newState = mockStore.getState();
      expect(newState.errorMessage).toMatch(/Hint/);
    });
  });

  it("should return new state with isloggedin true ", () => {
    const mockStore = store;
    new Promise(() => {
      mockStore.dispatch(login({ username: "admin", password: "admin" }));
    }).then(() => {
      const newState = mockStore.getState();
      expect(newState.isLoggedIn).toMatch(/Hint/);
    });
  });

  it("should return new state with isloggedin false", () => {
    const mockStore = store;
    new Promise((resolve) => {
      mockStore.dispatch(login());
    }).then(() => {
      const newState = mockStore.getState();
      expect(newState.errorMessage).toMatch(/Hint/);
    });
  });
});
