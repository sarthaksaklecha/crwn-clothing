import React from 'react';

import './checkout-item.styles.scss'

//action
import { removeItemFromCheckout } from '../../Redux/cart/cart.actions'
import { reduceItem } from '../../Redux/cart/cart.actions'
import { addItem } from '../../Redux/cart/cart.actions'

import { connect } from 'react-redux';

const CheckoutItem = ({ item , removeItem , reduceItem, addItem}) => {
    const { name, quantity, price, imageUrl } = item;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={()=>reduceItem(item)} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div onClick={()=>addItem(item)} className='arrow'>&#10095;</div>
        </span>
        
        <span className='price'>{price}</span>
        <span onClick={()=>removeItem(item)} className='remove-button'>&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItemFromCheckout(item)),
    reduceItem : item => dispatch(reduceItem(item)),
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);