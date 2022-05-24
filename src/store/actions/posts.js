import axios from "axios";
import { LOAD_POSTS } from "../types";

export const loadPosts = (userId) => async (dispatch) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const { data: allPosts } = await axios.get(apiUrl);
    dispatch({ type: LOAD_POSTS, payload: allPosts });
  } catch (err) {
    console.error(err);
  }
};
