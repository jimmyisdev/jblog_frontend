import { BASE_URL } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            // const token = (getState() as RootState).auth.token
            // If we have a token set in state, let's assume that we should be passing it.
            // if (token) {
            //   headers.set('authorization', `Bearer ${token}`)
            // }
            return headers
        },
    }),
    tagTypes: ['Article'],
    endpoints: builder => ({})
});
