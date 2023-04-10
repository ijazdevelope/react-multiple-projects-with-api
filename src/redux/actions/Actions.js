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

// actions for ecommerce project
export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: products
    };
};

export const selectedProduct = (ProductDetail) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: ProductDetail
    };
};

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
