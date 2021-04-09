import {SET_USERS, CHECK_ALL, SET_USERNAMES} from "./constants";

export function setUsers (users) {
    return {
        type: SET_USERS,
        payload: users
    }
}

export function checkAll (condition) {
    return {
        type: CHECK_ALL,
        payload: condition
    }
}

export function setUsernames (userNames) {
    return {
        type: SET_USERNAMES,
        payload: userNames
    }
}