import { ActionTypes } from "../constants/Action-Type"


const initialState ={
        product: [],
};


export const productreducer = (state= initialState , { type, payload } ) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { 
                ...state,
                 products: payload
                }

        default: 
        return state;
    }
}

export const selectProductReducer = (state={},{type,payload} ) => {

    switch (type){
     case ActionTypes.SELECTED_PRODUCTS:
        return {...state, ...payload }
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
        return { }  

        default: return state
    }
}