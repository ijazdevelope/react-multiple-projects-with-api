import { actionTypes } from '../constants/Constants'

export const addTodo = (payload) => {
    return {
        type: actionTypes.ADD_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: actionTypes.DELETE_TODO,
        payload
    }
}

export const updateTodo = (value, index) => {
    return {
        type: actionTypes.EDIT_TODO,
        payload: {
            ...value,
            index
        }
    }
}
