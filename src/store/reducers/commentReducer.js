import { LOAD_COMMENTS } from "../types";

const initialState = {
  allComments: [],
};

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { ...state, allComments: action.payload };
    default:
      return state;
  }
};
