import axios from "axios";
import { LOAD_POSTS } from "../types";

export const loadPosts = (userId) => {
  try {
    return async (dispatch) => {
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
      await axios.get(apiUrl).then((resp) => {
        const allPosts = resp.data;
        dispatch({ type: LOAD_POSTS, payload: allPosts });
      });
    };
  } catch (err) {
    console.log(err);
  }
};
