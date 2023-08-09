import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";


const store = configureStore({
    reducer: {
        auth : authReducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload'],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }),

})

export default store;
