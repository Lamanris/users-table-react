import {SET_USERNAMES, SET_USERS, CHECK_ALL} from "../constants";

export const rootReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
        case SET_USERNAMES:
            return {...state, userNames: action.payload}
        case CHECK_ALL:
            return {...state, isAllChecked: action.payload}
        default:
            return state
    }
}