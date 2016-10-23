import * as types from '../constants/ActionTypes';
import { REQUEST_USER, RECIEVE_USER_SUCCESS, RECIEVE_USER_FAILURE } from '../constants/constantTypes.js';

const initialState = {
  loaded: false,
  loading: false,
  data: {}
};


export default function user(state = initialState, action) {
  switch (action.type) {
  case REQUEST_USER: 
          return {...state, loading: true };
  case RECIEVE_USER_SUCCESS:
    return {...state, loading: false, loaded: true, data:action.newUser };
  case RECIEVE_USER_FAILURE:
      return { ...state, loading:false, data:{},err:action.err}  
  default:
    return state;
  }
}
