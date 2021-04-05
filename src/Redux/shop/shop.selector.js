import memoize from 'lodash.memoize'
import { createSelector } from 'reselect';

const COLLECTION_NAME_ID_MAP = {
    'hats':1,
    'sneakers':2,
    'jackets':3,
    'womens':4,
    'mens':5
}

const shopSelector = state => state.shop;

export const shopDataSelector = createSelector(
    [shopSelector],
    (shop)=> shop.SHOP_DATA
)

export const collectionSelector = memoize(urlParams => (
    createSelector(
        [shopDataSelector],
        (collections) => collections.find(collection => collection.id===COLLECTION_NAME_ID_MAP[urlParams]) 
    )
))