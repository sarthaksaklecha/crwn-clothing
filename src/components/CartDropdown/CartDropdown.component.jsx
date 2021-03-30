import React from 'react';

import CustomButton from '../custom-button/custom-button';
import { CartItem } from '../cart-item/cart-item.component';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';

// cartItem selector 
import { cartItemsSelector } from '../../Redux/cart/cart.selectors';

import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            {
                cartItems.length ?
                cartItems.map(item=>(
                    <CartItem item = {item}/>
                ))
                :
                <span className='empty-message'> Your cart is empty </span>
            }
        </div>
        <CustomButton onClick={()=>history.push('/checkout')} style = {{padding : 0}}>GO TO CHECKOUT</CustomButton>        
    </div>
)

const mapStateToprops = (state) => ({
    cartItems : cartItemsSelector(state)
})

export default withRouter(connect(mapStateToprops)(CartDropdown))