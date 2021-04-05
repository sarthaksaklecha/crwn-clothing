 import { combineReducers } from 'redux';
 import storage from 'redux-persist/lib/storage'
 import { persistReducer } from 'redux-persist'

 import userReducer from './User/user.reducer';
 import cartReducer from './cart/cart.reducer';
 import directoryReducer from './Directory/directory.reducer';
 import shopReducer from './shop/shop.reducer';

 const persistConfig = {
     key : 'root',
     storage,
     whitelist : ['cart']
 }

 const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory : directoryReducer,
    shop : shopReducer
})

 export default persistReducer(persistConfig,rootReducer)