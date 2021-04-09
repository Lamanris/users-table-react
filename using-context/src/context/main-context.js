import React, {createContext, useReducer, } from 'react'
import {CHECK_ALL, SET_USERNAMES, SET_USERS} from "./constants";
import {rootReducer} from "./reducers/rootReducer";

export const MainContext = createContext()

const initialState = {
    users : [],
    userNames: [],
    isAllChecked: false
}

export const MainContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    const setUsers = (users) => dispatch({type: SET_USERS, payload: users})

    const checkAll = (condition) => dispatch({type: CHECK_ALL, payload: condition})

    const setUsernames = (userNames) => dispatch({type: SET_USERNAMES, payload: userNames})

    const contextValues = {
        ...state,
        setUsers,
        checkAll,
        setUsernames
    }
    return (
        <MainContext.Provider value={contextValues}>
            {children}
        </MainContext.Provider>
    )
}
