import axios from "axios";
import { LOAD_USERS } from "../types";

export const loadUsers = () => async (dispatch) => {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const { data: allUsers } = await axios.get(apiUrl);
    dispatch({ type: LOAD_USERS, payload: allUsers });
  } catch (err) {
    console.error(err);
  }
};
