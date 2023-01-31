
import * as types from "./actionTypes"
import axios from "axios"

const getProductRequest = () => {
    return {
        type: types.GET_PRODUCT_REQUEST,
    }
}

const getProductSuccess = (payload) => {
  console.log("pay",payload)  
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

const getProductSort = (payload) => {
  return {
      type: types.GET_PRODUCT_SORT,payload
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
const getProducts = (params) =>dispatch=> {

console.log("params",params)
  dispatch(getProductRequest());
    return axios
      .get(`https://modern-jersey-bee.cyclic.app/fashion`,params)
      .then((r) => dispatch(getProductSuccess(r.data)))
      .catch((e) => {
        dispatch(getProductError());
      });
  }

  const getElectronicsProducts = (params) =>dispatch=> {

    console.log("params",params)
      dispatch(getProductRequest());
        return axios
          .get(`https://modern-jersey-bee.cyclic.app/electronics`,params)
          .then((r) => dispatch(getProductSuccess(r.data)))
          .catch((e) => {
            dispatch(getProductError());
          });
      }

      const getGroceryProducts = (params) =>dispatch=> {

        console.log("params",params)
          dispatch(getProductRequest());
            return axios
              .get(`https://modern-jersey-bee.cyclic.app/grocery`,params)
              .then((r) => dispatch(getProductSuccess(r.data)))
              .catch((e) => {
                dispatch(getProductError());
              });
          }
    
  

export { getProducts ,getElectronicsProducts,getGroceryProducts}