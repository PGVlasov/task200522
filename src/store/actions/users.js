import axios from "axios";
import { LOAD_USERS } from "../types";

export const loadUsers = () => {
  try {
    return async (dispatch) => {
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
      await axios.get(apiUrl).then((resp) => {
        const allUsers = resp.data;
        dispatch({ type: LOAD_USERS, payload: allUsers });
      });
    };
  } catch (err) {
    console.log(err);
  }
};
