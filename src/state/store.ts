import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
    reducers,
    { toDos: [], uniqueID: 0 },
    applyMiddleware(thunk)
)

export default store
