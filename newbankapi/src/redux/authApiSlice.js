import { apiSlice } from "../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'user/login',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        fetchUserProfile: builder.query({
            query: () => ({
                url: 'user/profile',
                method: 'POST',

            })
        })
    })
})


export const {
    useLoginMutation
} = authApiSlice