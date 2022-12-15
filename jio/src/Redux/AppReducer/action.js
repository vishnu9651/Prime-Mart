
import * as types from "./actionTypes"
import axios from "axios"

const getProductRequest = () => {
    return {
        type: types.GET_PRODUCT_REQUEST,
    }
}

const getProductSuccess = (payload) => {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload,
    }
}

const getProductError = () => {
    return {
        type: types.GET_PRODUCT_ERROR
    }
}

const getProducts = (params) => (dispatch) => {
    dispatch(getProductRequest())
    return axios
    .get(`http://localhost:8080/fruitsveg`, params)
    .then(r => {
      dispatch(getProductSuccess(r.data))
    })
    .catch(e => {
        console.log(e)
      dispatch(getProductError())
    })
}


export { getProducts }