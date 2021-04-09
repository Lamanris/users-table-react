import {CHECK_ALL} from "../constants";

export const isAllCheckedReducer = (state = false, action) => {
    switch (action.type) {
        case CHECK_ALL:
            return state = action.payload
        default:
            return state
    }
}