import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UsersReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({ image: UsersReducer });

export default createStore(rootReducer, applyMiddleware(thunk));
