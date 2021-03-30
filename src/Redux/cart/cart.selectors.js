import { createSelector } from 'reselect';

const cartSelector = state => state.cart ;

export const cartItemsSelector = createSelector(
    [cartSelector],
    (cart) => cart.cartItems
);

export const cartItemsQuantitySelector = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.reduce((accumalator, item)=>accumalator+=item.quantity,0)
)

export const hiddenSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.hidden
)