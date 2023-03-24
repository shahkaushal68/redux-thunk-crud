import { handleActions } from "redux-actions";
import { userTypes } from "../constants";

const initialState = {
    users:[],
    user:{}
}

export const userReducer = handleActions(
    {
      [userTypes.GET_ALL_USERS]: (state = initialState, action) => {
        return {
          ...state,
          users: action.payload,
        };
      },
      [userTypes.GET_SINGLE_USER]: (state = initialState, action) => {
        console.log("action", action);
        return {
          ...state,
          user: action.payload,
        };
      },
    },
    initialState,
);
  