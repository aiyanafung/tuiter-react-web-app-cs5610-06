import {createSlice} from "@reduxjs/toolkit";
import profile from "../data/profile.json";

const profileSlice= createSlice(
    {
        name: 'profile',
        initialState: profile,
        reducers: {
            updateProfile: (state, action) => {
                return {
                    ...state,
                    ...action.payload
                };
            }
        }
    }
);

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;