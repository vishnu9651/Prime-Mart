
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
    // .get(`http://localhost:8080/fruitsveg`, params)
    .get(`https://finaldata.onrender.com/jiodata`,params)
    .then(r => {
     console.log("30",r.data.fruitsveg)
      dispatch(getProductSuccess(r.data.fruitsveg))
    })
    .catch(e => {
        console.log(e)
      dispatch(getProductError())
    })
}


export { getProducts }