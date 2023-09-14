import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null},

    reducers: {
        setCredentials: (state, action) => {
            const {user, token} = action.payload
            state.user = user
            state.token = token
        },

        logOut: (state) => { 
            state.user = null
            state.token = null
        },
        userInformation: (state, action) => {
            const {user, token} = action.payload
            state.user = user
            state.token = token

        }
    }
})

export const {setCredentials, logOut} = authSlice.actions

export const logoutUser = () => async (dispatch) => {
    try {
        localStorage.removeItem('token')
        dispatch(logOut())
    }catch (err) {
    console.log('Erreur lors de la déconnexion :', err);
    }
} 

// export const userInfosRequest = () => async (dispatch) => {
//     try {
//         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
//         method: 'POST', 
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',

//         },
//       });
//             dispatch(userInformation())
//     } catch (err) {
//         console.log(err);
//     }
// }



export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
