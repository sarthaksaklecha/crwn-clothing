import React from 'react';

import './checkout-item.styles.scss'

//action
import { removeItemFromCheckout } from '../../Redux/cart/cart.actions'
import { connect } from 'react-redux';

const CheckoutItem = ({ item , removeItem }) => {
    const { name, quantity, price, imageUrl } = item;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span onClick={()=>removeItem(item)} className='remove-button'>&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItem : (item) => dispatch(removeItemFromCheckout(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);