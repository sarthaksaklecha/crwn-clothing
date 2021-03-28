import { actionTypes } from './cart.action-types'
const INITIAL_STATE = {
    hidden : true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { hidden } = state;
    switch(action.type){
        case actionTypes.HIDDEN :
            return {
                ...state,
                hidden : !hidden
            }
        default :  
            return state  
    }
}

export default cartReducer;