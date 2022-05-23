import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CommentsReducer } from "./reducers/commentReducer";
import { PostsReducer } from "./reducers/postReducer";
import { UsersReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
