import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bottles: ['bottle1', 'bottle2', 'bottle3'],
    busters: ['buster1', 'buster2', 'buster3']
};

export const machineSlice = createSlice({
    name: 'machine',
    initialState,
    reducers: {
        addBottle: (state, action) => {
            state.bottles.push(action.payload);
        },
        removeBottle: (state, action) => {
            state.bottles = state.bottles.filter((bottle) => bottle !== action.payload);
        },
        removeBuster: (state, action) => {
            state.busters = state.busters.filter((buster) => buster !== action.payload);
        }
    }
});

export const { addBottle, removeBottle, removeBuster } = machineSlice.actions;

export default machineSlice.reducer;
