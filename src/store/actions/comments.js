import axios from "axios";
import { LOAD_COMMENTS } from "../types";

export const loadComments = (postId) => async (dispatch) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const { data: allComments } = await axios.get(apiUrl);
    dispatch({ type: LOAD_COMMENTS, payload: allComments });
  } catch (err) {
    console.error(err);
  }
};
