import * as types from "./actionTypes";

let initialState = {
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return oldState;
  }
};

export { reducer };
