import { actionTypes, INCREMENT } from "../constants/Constants";

const InitialState = {
    list: JSON.parse(localStorage.getItem('todo')) || [],
}

export const Reducers = (state = InitialState, { payload, type }) => {
    // const { type } = payload
    console.log(payload, state.list, 'payload in reducer');

    switch (type) {
        case INCREMENT: return { ...state, list: payload };
        case actionTypes.ADD_TODO: {
            localStorage.setItem('todo', JSON.stringify([...state.list, { ...payload }]))
            return { ...state, list: [...state.list, { ...payload }] }
        };
        default: return state;
    }
}