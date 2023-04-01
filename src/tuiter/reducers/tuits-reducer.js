import {createSlice}
  from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk}
  from "../../services/tuits-thunks";

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "NASA.jpg"
};

export const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]: (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]: (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] : (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]: (state, { payload }) => {
                state.loading = false
                console.log(payload);
                console.log(templateTuit);
                state.tuits.unshift({
                    ...payload,
                    ...templateTuit,
                    _id: (new Date()).getTime()
                })
            },
        [updateTuitThunk.fulfilled]: (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    },
    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime()
            })
        },
        likeTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = true;
            state[tuitIndex].likes += 1;
        },
        unlikeTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = false;
            state[tuitIndex].likes -= 1;
        },
    }
});

export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;