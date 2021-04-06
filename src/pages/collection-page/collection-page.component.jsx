import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-item/CollectionItem.component'

import { collectionSelector } from '../../Redux/shop/shop.selector'
import './collection-page.styles.scss'


const CollectionPage = ({ collection }) => 
{
    const { title, id, items } = collection
    console.log(collection)
    return(
    <div className='collection-page'>
        <h2 className='title'> {title} </h2>
        <div className='items'>
        {
            items.map(item=> <CollectionItem key={id} item={item}/>)
        }
        </div>
    </div>
)}

const mapStateToProps = (state,ownProps) => ({
    collection : collectionSelector(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)
