import React from "react";
import { StyleSheet } from "react-native";

import LoginScreen from "./Screens/LoginPage";
import { store } from "./redux/createStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
