import { actionTypes } from './cart.action-types'
const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { hidden } = state;
    switch(action.type){
        case actionTypes.HIDDEN :
            return {
                ...state,
                hidden : !hidden
            }
        case actionTypes.ADD_ITEM : 
            return {
                ...state,
                cartItems : [...state.cartItems , action.payload]
            }
        default :  
            return state  
    }
}

export default cartReducer;