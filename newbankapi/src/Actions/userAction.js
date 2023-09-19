import { produce } from 'immer';
import { setUser } from '../redux/authSlice';
const FETCHING = 'user/fetching'
const RESOLVED = 'user/resolved'
const REJECTED = 'user/rejected'

export const FETCH_USER_INFO_REQUEST = 'FETCH_USER_INFO_REQUEST';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';

const userResolved = (data) => ({type: RESOLVED, payload: data})
const userFetching = () => ({ type: FETCHING });
const userRejected = (error) => ({ type: REJECTED, payload: error });

const userInfoResolved = (data) => ({ type: FETCH_USER_INFO_SUCCESS, payload: data });




export default async function fetchOrUpdateUser(store) {
  const status = store.getState().user.status
  if (status === 'pending' || 'updating') {
    return;
  }

  store.dispatch()

}








export const fetchUserInfo = (token) => async (dispatch) => {
    dispatch({ type: FETCH_USER_INFO_REQUEST });
  
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        const data = await response.json();
        dispatch({
          type: FETCH_USER_INFO_SUCCESS,
          payload: data,
        });
        dispatch(userResolved(data.body))
        dispatch(setUser(data.body))
        
      }
  

    } catch (error) {
      dispatch({
        type: FETCH_USER_INFO_FAILURE,
        payload: error.message,
      });
    }
  };


  export const changehUserInfo = (token) => async (dispatch) => {
    // dispatch({ type: CHANGE_USER_INFO });
    
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT', 
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: {"firstName": "string", "lastName" : "string"},
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        const data = await response.json();
        dispatch({
          type: FETCH_USER_INFO_SUCCESS,
          payload: data,
        });
        dispatch(userResolved(data.body))
        dispatch(setUser(data.body))
        
      }
  

    } catch (error) {
      dispatch({
        type: FETCH_USER_INFO_FAILURE,
        payload: error.message,
      });
    }
  };
  

// const initialState = {
//   status: 'void',
//   data: null, 
//   error: null, 
// }


// const FETCHING = 'user/fetching'
// const REJECTED = 'user/rejected'


// const userFetching = () => ({type: FETCHING})


// const userRejected = (error) => ({type: REJECTED, payload: error})


// export default function userReducer(state = initialState, action) {

//   return produce(state, draft => {
//       switch (action.type) {
//         case FETCHING: {
//           if (draft.status === 'void') {
//             draft.status = 'pending'
//             return;
//           }
//           if (draft.status === 'rejected') {
//             // draft.error === null
//             draft.status = 'pending'
//             return
//           }
//           if (draft.status === 'resolved') {
//             draft.status = 'updating'
//             return
//           }
//           return
//         }
//         case RESOLVED : {
//           if (draft.status === 'pending'|| draft.status === 'updating' ) {
//             draft.data = action.payload
//             draft.status = 'resolved'
//             return
//           }
//           return;
//         }
//         case REJECTED : {
//           if (draft.status === 'pending' || draft.status === 'updating') {
//             draft.error = action.payload
//             draft.data = null
//             draft.status = 'rejected'
//             return
//           }
//           return
//         }
//         default:
//           return
//       }
//     })
// }

