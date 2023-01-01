import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer, { name as userSliceName } from '@/lib/redux/slices/user/user.slice';

import { isDevelopmentMode } from '@/lib/utils/environment.utils';

export const store = configureStore({
    reducer: {
        [userSliceName]: userReducer,
    },
    middleware(getDefaultMiddleware) {
        const middlewares = [...getDefaultMiddleware()];
        if (isDevelopmentMode) middlewares.push(logger);
        return middlewares;
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
