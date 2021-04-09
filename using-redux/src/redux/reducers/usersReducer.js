import {SET_USERNAMES, SET_USERS} from "../constants";

const initialState = {
    users : [],
    userNames: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
        case SET_USERNAMES:
            return {...state, userNames: action.payload}
        default:
            return state
    }
}