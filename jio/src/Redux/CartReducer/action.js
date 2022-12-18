import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"


import * as types from "./actionTypes";

export const getCartRequest = () => {

    return { type: types.GET_CART_REQUEST }

}

export const getCartSuccess = (payload) => {

    return { type: types.GET_CART_SUCCESS, payload }

}

export const getCartError = () => {

    return { type: types.GET_CART_ERROR }

}
export const addCartRequest = () => {
    return { type: types.ADD_CART_REQUEST }
}

export const addCartSuccess = (payload) => {
    return { type: types.ADD_CART_SUCCESS, payload }
}
export const addCartError = () => {
    return { type: types.ADD_CART_ERROR }
}

export const deleteCartRequest = () => {
    return { type: types.DELETE_CART_REQUEST }
}
export const deleteCartSuccess = (payload) => {


    return { type: types.DELETE_CART_SUCCESS, payload }
}
export const deleteCartError = () => {

    return { type: types.DELETE_CART_ERROR }
}





export const getCart = () => dispatch => {

    dispatch(getCartRequest())
    return axios.get("https://cartdeployement.onrender.com/cart")
        .then((r) => { dispatch(getCartSuccess(r.data))
        })
        .catch((e) => { dispatch(getCartError()) })

        }

export const addCart = (title) => dispatch => {
    if (title) {
        const payload = { title };
        dispatch(addCartRequest())
        return axios.post("https://cartdeployement.onrender.com/cart", payload).then((r) => {
            dispatch(addCartSuccess(r.data))
        }).catch((e) => {

            dispatch(addCartError())
        })
    }
}

// export const getCartId = () => dispatch => {
//     dispatch(getCartRequest())
//     return axios.get("http://localhost:8080/todos/")
//         .then((r) => { dispatch(getCartSuccess(r.data)) })
//         .catch((e) => { dispatch(getCartError()) })

// }

// export const deleteCart = (id) => dispatch => {
//     dispatch(deleteCartRequest())
//     axios.delete(`https://cartdeployement.onrender.com/cart${id}`)
//         .then((r) => {
//             dispatch(deleteCartSuccess(id))
//             dispatch(getCart())
//         })
//         .catch((e) => { dispatch(getCartError()) })
// }

