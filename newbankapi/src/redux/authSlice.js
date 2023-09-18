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

        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
})

export const {setCredentials, logOut, setUser } = authSlice.actions

export const logoutUser = () => async (dispatch) => {
    try {
        localStorage.removeItem('token')
        dispatch(logOut())
    }catch (err) {
    console.log('Erreur lors de la déconnexion :', err);
    }
} 


export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
