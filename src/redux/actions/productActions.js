import { ActionTypes }  from '../constants/Action-Type'

export const setProducts = (products) => {

    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectproduct = (product) => {

    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
}

export const removeSelectedproduct = (product) => {

    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}