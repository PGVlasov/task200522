import axios from "axios";
import { LOAD_COMMENTS } from "../types";

export const loadComments = () => {
  try {
    return async (dispatch) => {
      const apiUrl = "https://jsonplaceholder.typicode.com/posts/23/comments";
      await axios.get(apiUrl).then((resp) => {
        const allComments = resp.data;
        dispatch({ type: LOAD_COMMENTS, payload: allComments });
      });
    };
  } catch (err) {
    console.log(err);
  }
};
