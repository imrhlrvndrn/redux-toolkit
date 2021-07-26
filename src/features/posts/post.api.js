import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postApi = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `https://jsonplaceholder.typicode.com` }),
    endpoints: (build) => ({
        loadPosts: build.query({
            query: () => `/posts`,
        }),
    }),
});

export const { reducerPath, middleware, reducer, useLoadPostsQuery } = postApi;
