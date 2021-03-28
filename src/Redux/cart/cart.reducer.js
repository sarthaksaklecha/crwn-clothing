import { actionTypes } from './cart.action-types';
import { addItemToCart } from './cart.utils';
const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { hidden, cartItems } = state;
    switch(action.type){
        case actionTypes.HIDDEN :
            return {
                ...state,
                hidden : !hidden
            }
        case actionTypes.ADD_ITEM : 
            return {
                ...state,
                cartItems : addItemToCart(cartItems,action.payload)
            }
        default :  
            return state  
    }
}

export default cartReducer;