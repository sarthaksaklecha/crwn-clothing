import { actionTypes } from './cart.action-types';
import { addItemToCart, reduceItem } from './cart.utils';
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
        
        case actionTypes.REMOVE_ITEM_FROM_CHECKOUT :
            return {
                ...state,
                cartItems : cartItems.filter(item=>item.id!==action.payload.id)
            }

        case actionTypes.REDUCE_ITEM : 
            return {
                ...state,
                cartItems : reduceItem(cartItems,action.payload)
            }
        default :  
            return state  
    }
}

export default cartReducer;