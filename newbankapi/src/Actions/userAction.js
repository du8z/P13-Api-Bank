export const FETCH_USER_INFO_REQUEST = 'FETCH_USER_INFO_REQUEST';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';

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
      
        console.log(data);
        dispatch({
          type: FETCH_USER_INFO_SUCCESS,
          payload: data,
        });
      }
  

    } catch (error) {
      dispatch({
        type: FETCH_USER_INFO_FAILURE,
        payload: error.message,
      });
    }
  };

  