import { configureStore } from '@reduxjs/toolkit'
import { woodworkingApi } from '../api/woodworkingApi'
import commentsReducer from '../api/commentsSlice'

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        [woodworkingApi.reducerPath]: woodworkingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(woodworkingApi.middleware)
})