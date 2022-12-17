import * as types from "./actionTypes"

const initialState = {
  fruitsveg: [],
    isLoading: false,
    isError: false
}

const reducer = (oldState = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case types.GET_PRODUCT_REQUEST:
            return {...oldState, isLoading: true}
        case types.GET_PRODUCT_SUCCESS:
            return {...oldState, isLoading:false, fruitsveg: payload}    
        case types.GET_PRODUCT_ERROR:
            return {...oldState, isLoading:false, isError: true}        
        default:
            return oldState;    
    }
}

export { reducer }