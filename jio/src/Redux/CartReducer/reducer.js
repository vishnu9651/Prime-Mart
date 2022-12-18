
import * as types from "./actionTypes";

const initialState={cart:[],isLoading:false, isError:false}

export const reducer=(oldState=initialState,action)=>{

const {type,payload}=action;
switch(type){
    case types.GET_CART_REQUEST:
        return {...oldState,isLoading:true}

    case types.GET_CART_SUCCESS:
        return {...oldState,isLoading:false,cart:payload}

        case types.GET_CART_ERROR:
            return {...oldState,isLoading:false,isError:true}

            case types.ADD_CART_REQUEST:
                return {...oldState,isLoading:true}
        
            case types.ADD_CART_SUCCESS:
                return {...oldState,isLoading:false,cart:[...oldState.cart,payload]}
        
                case types.ADD_CART_ERROR:
                    return {...oldState,isLoading:false,isError:true}

                    case types.DELETE_CART_REQUEST:
                        return {...oldState,isLoading:true}
                        case types.DELETE_CART_SUCCESS:
                            return {...oldState,isLoading:false}
       case types.DELETE_CART_ERROR:
        return {...oldState,isLoading:false,isError:true}
                    default :return oldState
}


}