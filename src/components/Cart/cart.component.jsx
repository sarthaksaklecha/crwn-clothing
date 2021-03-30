import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag/shopping-bag.svg'

import { connect } from 'react-redux';
import { toggleDropdown } from '../../Redux/cart/cart.actions';

//selectors
import { cartItemsQuantitySelector } from '../../Redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const Cart = ({toggleDropdown, cartItemsQuantity}) => 
{
    return(
    <div className = 'cart' onClick = {toggleDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsQuantity}</span>
    </div>)
}



const mapDispatchToProps = dispatch => ({
    toggleDropdown : () => dispatch(toggleDropdown())
})

const mapStateToProps = state => ({
    cartItemsQuantity : cartItemsQuantitySelector(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)

