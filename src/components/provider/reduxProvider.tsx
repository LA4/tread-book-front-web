'use client'
import userReducer from "@/store/userReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storage from 'redux-persist/lib/storage'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


const reducers = combineReducers({ user: userReducer });
const persistConfig = {
    key: "threadBook",
    storage
};
export const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})
export const persistor = persistStore(store);


export const ReduxProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>

            {children}
        </PersistGate >
    </Provider>;
};
