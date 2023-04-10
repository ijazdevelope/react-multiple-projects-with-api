import { actionTypes } from "../constants/Constants";

const InitialState = {
    list: JSON.parse(localStorage.getItem('todo')) || [],
}

const initialState = {
    products: []
}

export const Reducers = (state = InitialState, { payload, type }) => {

    switch (type) {
        case actionTypes.ADD_TODO: {
            localStorage.setItem('todo', JSON.stringify([...state.list, { ...payload }]));
            return { ...state, list: [...state.list, { ...payload }] }
        };
        case actionTypes.DELETE_TODO: {
            localStorage.setItem('todo', JSON.stringify([...payload]));
            const getValue = JSON.parse(localStorage.getItem('todo'));
            return { ...state, list: [...getValue] }
        };

        case actionTypes.EDIT_TODO: {
            const tempArr = [...state.list];
            tempArr[payload.index].todo_name = payload.todo_name;
            localStorage.setItem('todo', JSON.stringify(tempArr));
            return { ...state, list: tempArr }
        };
        default: return state;
    }
}

// reducers for ecommerce project
export const ProductReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case actionTypes.SET_PRODUCT:
            return { ...state, products: payload }
        default:
            return state;
    };
}

export const ProductDetailReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, state: [payload] }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    };
}
