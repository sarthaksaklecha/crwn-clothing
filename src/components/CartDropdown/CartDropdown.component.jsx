import React from 'react';

import CustomButton from '../custom-button/custom-button';
import { CartItem } from '../cart-item/cart-item.component';
import { connect } from 'react-redux'

// cartItem selector 
import { cartItemsSelector } from '../../Redux/cart/cart.selectors';

import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            {
                cartItems.map(item=>(
                    <CartItem item = {item}/>
                ))
            }
        </div>
        <CustomButton style = {{padding : 0}}>GO TO CHECKOUT</CustomButton>        
    </div>
)

const mapStateToprops = (state) => ({
    cartItems : cartItemsSelector(state)
})

export default connect(mapStateToprops)(CartDropdown)