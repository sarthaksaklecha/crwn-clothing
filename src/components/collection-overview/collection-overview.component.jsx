import React from 'react';

import { connect } from 'react-redux';

import { shopDataSelector } from '../../Redux/shop/shop.selector.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './collection-overview.styles.scss';

const CollectionOverview = ({ SHOP_DATA }) => (
    <div className='collection-overview'>
    {
        Object.values(SHOP_DATA).map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))
    }
    </div>
)

const mapStateToProps = (state) => ({
    SHOP_DATA : shopDataSelector(state)
})

export default connect(mapStateToProps)(CollectionOverview)
