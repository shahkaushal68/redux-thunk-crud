import { createAction } from "redux-actions";

export const userTypes = {
    GET_ALL_USERS: "GET_ALL_USERS",
    GET_SINGLE_USER: "GET_SINGLE_USER"
}

export const GET_ALL_USERS = createAction(userTypes.GET_ALL_USERS);
export const GET_SINGLE_USER = createAction(userTypes.GET_SINGLE_USER);


