import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag/shopping-bag.svg'

import { connect } from 'react-redux';
import { toggleDropdown } from '../../Redux/cart/cart.actions';

import './cart-icon.styles.scss';

const Cart = ({toggleDropdown, cartItems}) => 
{
    let quantity = cartItems.reduce((accumalator, item)=>accumalator+=item.quantity,0)
    return(
    <div className = 'cart' onClick = {toggleDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{quantity}</span>
    </div>)
}



const mapDispatchToProps = dispatch => ({
    toggleDropdown : () => dispatch(toggleDropdown())
})

const mapStateToProps = state => ({
    cartItems : state.cart.cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)

