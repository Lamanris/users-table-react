import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {isAllCheckedReducer} from "./isAllCheckedReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    isAllChecked: isAllCheckedReducer
})
export default rootReducer