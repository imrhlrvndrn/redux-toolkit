import { configureStore } from '@reduxjs/toolkit';
import { reducer, middleware, reducerPath } from '../features/posts/post.api';

export const store = configureStore({
    reducer: {
        [reducerPath]: reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
