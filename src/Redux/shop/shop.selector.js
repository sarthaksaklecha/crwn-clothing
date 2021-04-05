
import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const shopDataSelector = createSelector(
    [shopSelector],
    (shop)=> shop.SHOP_DATA
)