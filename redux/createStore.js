import { createStore, applyMiddleware } from "redux";
import login from "./loginReducer";
import thunk from "redux-thunk";

export const store = createStore(login, applyMiddleware(thunk));
