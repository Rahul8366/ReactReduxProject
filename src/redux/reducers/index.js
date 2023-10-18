import { combineReducers } from 'redux'
import { productreducer, selectProductReducer  } from './productReducers'

 const reducers = combineReducers({
    allProducts: productreducer,
    product: selectProductReducer,
})

export default reducers