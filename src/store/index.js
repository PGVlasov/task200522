import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UsersReducer, PostsReducer, CommentsReducer } from "./reducers";

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
