import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../redux/authSlice'


const baseQuery = fetchBaseQuery ({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers, {getState}) => {
        console.log(getState());
        const token = getState().auth.token
        console.log('Token from Redux Store:', token)
        console.log(getState().auth);
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token');

        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState.auth.user
            //store new token
            api.dispatch(setCredentials({...refreshResult.data, user}))

            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})