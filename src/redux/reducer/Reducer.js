import { actionTypes, INCREMENT } from "../constants/Constants";

const InitialState = {
    list: JSON.parse(localStorage.getItem('todo')) || [],
}

export const Reducers = (state = InitialState, { payload, type }) => {
    console.log(payload, type, 'payload in reducer');

    switch (type) {
        case INCREMENT: return { ...state, list: payload };
        case actionTypes.ADD_TODO: {
            localStorage.setItem('todo', JSON.stringify([...state.list, { ...payload }]));
            return { ...state, list: [...state.list, { ...payload }] }
        };
        case actionTypes.DELETE_TODO: {
            localStorage.setItem('todo', JSON.stringify([...payload]));
            const getValue = JSON.parse(localStorage.getItem('todo'));
            return { ...state, list: [...getValue] }
        };
        default: return state;
    }
}