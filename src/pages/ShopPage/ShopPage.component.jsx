import React from 'react';
import { shopDataSelector } from '../../Redux/shop/shop.selector.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { connect } from 'react-redux';
const ShopPage = ({SHOP_DATA}) =>{
        const collections = SHOP_DATA ;
        return (
            <div className='shop-page'>
                <div className='collection-preview'>
                {
                    collections.map(({ id, ...otherProps }) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
                </div>
            </div>)
}

const mapStateToProps = (state) => ({
    SHOP_DATA : shopDataSelector(state)
})

export default connect(mapStateToProps)(ShopPage)