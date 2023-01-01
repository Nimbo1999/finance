import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '@/lib/models/User/UserData';

export interface UserState {
    user: null | UserData;
    isLoading: boolean;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        helloAction: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
        },
    },
});

export const { helloAction } = userSlice.actions;
export const { name } = userSlice;
export default userSlice.reducer;
