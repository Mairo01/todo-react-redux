import {combineReducers} from "redux";
import toDoReducer from "./toDoReducer";
import uniqueIDReducer from "./uniqueIDReducer";

const reducers = combineReducers({
    toDos: toDoReducer,
    uniqueID: uniqueIDReducer
})

export default reducers