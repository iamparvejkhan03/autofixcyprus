import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { languageReducer } from "../features/languageSlice.js";

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, languageReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredPaths: ['user.user.image']
            },
        })
)
});

const persistor = persistStore(store);

export {store, persistor};