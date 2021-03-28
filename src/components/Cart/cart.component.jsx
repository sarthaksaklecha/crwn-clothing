import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag/shopping-bag.svg'

import { connect } from 'react-redux';
import { toggleDropdown } from '../../Redux/cart/cart.actions';

import './cart-icon.styles.scss';

const Cart = ({toggleDropdown}) => (
    <div className = 'cart' onClick = {toggleDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleDropdown : () => dispatch(toggleDropdown())
})

export default connect(null,mapDispatchToProps)(Cart)

