import { LOAD_USERS } from "../types";

const initialState = {
  allUsers: [],
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};
