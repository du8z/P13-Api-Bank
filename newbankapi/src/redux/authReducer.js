import { FETCH_USER_INFO_SUCCESS } from '../Actions/userAction';
const initialState = {
  user: null,
  error: null,
  token: null,  
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload, 
        error: null,
      };
      
    // Autres cas...
    default:
      return state;
  }
};

export default authReducer;



