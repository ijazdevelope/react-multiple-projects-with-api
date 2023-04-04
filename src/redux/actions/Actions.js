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
    console.log(payload, 'delete todo in actions...')
    return {
        type: actionTypes.DELETE_TODO,
        payload
    }
}
