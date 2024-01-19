import { configureStore } from '@reduxjs/toolkit'
import { woodworkingApi } from '../api/woodworkingApi'


export const store = configureStore({
    reducer: {
        [woodworkingApi.reducerPath]: woodworkingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(woodworkingApi.middleware)
})