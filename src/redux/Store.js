import { combineReducers, createStore } from "redux";
import { Reducers } from "./reducer/Reducer";

const rootReducer = combineReducers({
    reducer: Reducers
})
export const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())