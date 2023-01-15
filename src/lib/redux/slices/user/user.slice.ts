import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/lib/models/User/User';

export interface UserState {
    user: null | User;
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
        helloAction: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { helloAction } = userSlice.actions;
export const { name } = userSlice;
export default userSlice.reducer;
