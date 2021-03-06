import { actionTypes } from './cart.action-types';
    
export const toggleDropdown = () => ({
    type : actionTypes.HIDDEN,
    payload: null
})

export const addItem = (item) => ({
    type : actionTypes.ADD_ITEM,
    payload : item
})

export const removeItemFromCheckout = (item) => ({
    type : actionTypes.REMOVE_ITEM_FROM_CHECKOUT,
    payload : item
})

//reduce item quantity
export const reduceItem = (item) => ({
    type : actionTypes.REDUCE_ITEM,
    payload : item
})

export const clearAll = () => ({
    type : actionTypes.CLEAR_ALL,
    payload: null
})