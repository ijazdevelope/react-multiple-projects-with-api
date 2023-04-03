import { actionTypes, INCREMENT } from '../constants/Constants'

export const Action = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const addTodo = (payload) => {

    console.log(payload, 'object in actions...')
    return {
        type: actionTypes.ADD_TODO,
        payload
    }
}
