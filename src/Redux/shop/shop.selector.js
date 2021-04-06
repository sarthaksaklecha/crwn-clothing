import memoize from 'lodash.memoize'
import { createSelector } from 'reselect';


const shopSelector = state => state.shop;

export const shopDataSelector = createSelector(
    [shopSelector],
    (shop)=> shop.SHOP_DATA
)


export const collectionSelector = memoize(urlParams => (
    createSelector(
        [shopDataSelector],
        (collections) => collections[urlParams]
    )
))