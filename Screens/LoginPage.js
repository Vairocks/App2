import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { View, Text, Button, StatusBar } from "react-native";
import Charts from "./Charts";
import { connect } from "react-redux";
import { loggingIn, loggingOut } from "../redux/actionCreator";

const LoginScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!props.isLoggedIn) {
    return (
      <>
        <View>
          <StatusBar backgroundColor="#0a3d0a" barStyle="light-content" />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>User Name</Text>
          <View>
            <TextInput
              placeholder="UserName"
              autoCapitalize="none"
              onChangeText={(val) => setUsername(val)}
              secureTextEntry
              autoCorrect={false}
            />
          </View>
          <Text>Password</Text>
          <View>
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={(val) => setPassword(val)}
              secureTextEntry
              autoCorrect={false}
            />
          </View>
          <View>
            <Button
              onPress={() =>
                props.login({ username: username, password: password })
              }
              title="Login"
            />
            {props.errorMessage ? <Text>{props.errorMessage}</Text> : null}
          </View>
        </View>
      </>
    );
  } else {
    return <Charts logout={props.logout} />;
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loggingIn(username, password)),
  logout: () => dispatch(loggingOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
