import { actionTypes, INCREMENT } from '../constants/Constants'

export const Action = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

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

export const updateTodo = (payload) => {
    console.log(payload, 'payload in actions...')
    return {
        type: actionTypes.EDIT_TODO,
        payload
    }
}
