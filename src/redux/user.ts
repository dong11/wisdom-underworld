import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk, RootState } from "./store";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        logined: false,
    },
    reducers: {
        updateLoginStatus(state, action) {
            state.logined = action.payload;
        }
    },
});

export const {
    updateLoginStatus,
} = userSlice.actions;

export const login = (payload: any): AppThunk => async (dispatch: any) => {
    // TODO fetch login
    dispatch(updateLoginStatus(true));
}

export const logout = (payload: any) => async (dispatch: AppDispatch) => {
    // TODO fetch login
    dispatch(updateLoginStatus(false));
}

export const selectLogined = (state: RootState) => state.user.logined;

export default userSlice.reducer;