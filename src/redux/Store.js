import { combineReducers, createStore } from "redux";
import { ProductDetailReducer, ProductReducer, Reducers } from "./reducer/Reducer";

const rootReducer = combineReducers({
    reducer: Reducers,
    ProductReducer,
    ProductDetailReducer
});

export const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
