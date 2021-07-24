import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.value += 1;
        },
        incrementCounterWith: (state, action) => {
            state.value += +action.payload;
        },
        decrementCounter: (state) => {
            state.value -= 1;
        },
        decrementCounterWith: (state, action) => {
            state.value -= +action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const {
    incrementCounter,
    decrementCounter,
    incrementCounterWith,
    decrementCounterWith,
    reset,
} = counterSlice.actions;

export default counterSlice.reducer;
