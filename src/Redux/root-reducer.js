 import { combineReducers } from 'redux';

 import userReducer from './User/user.reducer';
 import cartReducer from './cart/cart.reducer';

 export default combineReducers({
     user: userReducer,
     cart: cartReducer
 })