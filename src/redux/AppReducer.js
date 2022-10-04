import React from "react";
import {getAuthUserData} from "./AuthReducer";
const INITIALIZATION_SACCESS = 'INITIALIZATION_SACCESS';

let initialState = {
  initialization: false,

};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SACCESS:
      return {
        ...state, initialization: true,

      }

    default:
      return state;


  }
};

export const initializationSuccess = () => ({type: INITIALIZATION_SACCESS });

export const initializeApp = () => (dispatch) => {
let promise = dispatch(getAuthUserData());
Promise.all ([promise])
  .then(()=>{
  dispatch(initializationSuccess());
});

}

export default appReducer;
