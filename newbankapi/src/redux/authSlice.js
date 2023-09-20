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

        setUser: (state, action) => {
            state.user = action.payload;
        },
        updateNameData: (state, action) => {
            const {firstName, lastName} = action.payload
            state.user.firstName = firstName
            state.user.lastName = lastName
        }
    }
})

export const {setCredentials, logOut, setUser, updateNameData } = authSlice.actions

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
