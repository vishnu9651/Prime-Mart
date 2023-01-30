
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

// const getProducts = (params) => (dispatch) => {
//     dispatch(getProductRequest())
//     return axios.get(`https://lonely-fish-khakis.cyclic.app/data`,params)
//     .then((r) => {
//      console.log("30",r)
//       dispatch(getProductSuccess(r))
//       console.log("sdfsdfsdaf")
//     })
//     .catch(e => {
//         console.log("err",e)
//       dispatch(getProductError())
//     })
    
// }
const getProducts = (dispatch) => {
    dispatch(getProductRequest());
    return axios
      .get("https://lonely-fish-khakis.cyclic.app/data")
      .then((r) => dispatch(getProductSuccess(r.data.fashion)))
      .catch((e) => {
        dispatch(getProductError());
      });
  }

  const getFashionProducts = (dispatch) => {
    dispatch(getProductRequest());
    return axios
      .get("https://lonely-fish-khakis.cyclic.app/data")
      .then((r) => dispatch(getProductSuccess(r.data.fahion)))
      .catch((e) => {
        dispatch(getProductError());
      });
  }

export { getProducts }