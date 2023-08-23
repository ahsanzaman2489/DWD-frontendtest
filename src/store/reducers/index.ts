import userReducer from "./userReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const userPersistConfig = {
    key: 'user',
    storage,
    keyPrefix: ''
}

const rootReducer = () => {
    return {
        user: persistReducer(userPersistConfig, userReducer),
    }
}

export default rootReducer;