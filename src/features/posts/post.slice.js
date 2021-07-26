import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../config/axios';

export const initialState = {
    posts: [],
    error: null,
    status: 'idle',
};

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
    try {
        const response = await axios.get('/posts?_limit=10');
        console.log('API response => ', response);
        return response.data;
    } catch (error) {
        console.error(error.response);
        return rejectWithValue(error.response.data);
    }
});

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.posts = action.payload;
        },
        [loadPosts.error]: (state, action) => {
            state.status = 'error';
            state.error = action.payload.message;
        },
    },
});

// selectors
export const selectPosts = (state) => state.posts.posts;
export const selectPostsError = (state) => state.posts.error;
export const selectPostsStatus = (state) => state.posts.status;

export default postSlice.reducer;
