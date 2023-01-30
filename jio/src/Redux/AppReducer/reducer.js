import * as types from "./actionTypes"

const initialState = {
  data: [],
    isLoading: false,
    isError: false
}

const reducer = (oldState = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case types.GET_PRODUCT_REQUEST:
            return {...oldState, isLoading: true}
        case types.GET_PRODUCT_SUCCESS:
            return {...oldState, isLoading:false, data: payload}    
        case types.GET_PRODUCT_ERROR:
            return {...oldState, isLoading:false, isError: true}        
     
     case types.GET_PRODUCT_SORT:
        const sort=initialState.data.sort((a, b) => {
            return a.price - b.price;
        });   
     console.log("sort",sort)
            default:
            return oldState;    
    }
}

export { reducer }