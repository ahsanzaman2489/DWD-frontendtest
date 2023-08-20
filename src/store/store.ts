import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import {persistStore } from 'redux-persist';



export const store = configureStore({
    reducer: rootReducer(),
    middleware:[thunk]
})

export const persistor = persistStore(store)