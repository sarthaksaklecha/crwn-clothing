import React from 'react';
import { connect } from 'react-redux';

import { collectionSelector } from '../../Redux/shop/shop.selector'

const CollectionPage = ({ collection }) => 
{
    console.log(collection)
    return(
    <div className='collection-page'>
        <h2> COLLECTION PAGE </h2>
    </div>
)}

const mapStateToProps = (state,ownProps) => ({
    collection : collectionSelector(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)
