import { login_fail, login_request, login_success } from "./actionTypes";
import * as types from "./actionTypes";

let initialState = {
  toke:null,
  isAuth:false,
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
     case login_request:
      return {...oldState,isLoading:true}
     case login_success:
     return {...oldState,token:payload,isAuth:true}
     case login_fail:
      return {...oldState,isError:true}
    default:
      return oldState;
  }
};

export { reducer };
