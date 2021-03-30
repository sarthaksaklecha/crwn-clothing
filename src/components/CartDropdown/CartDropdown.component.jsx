import React from 'react';

import CustomButton from '../custom-button/custom-button';
import { CartItem } from '../cart-item/cart-item.component';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';

// cartItem selector 
import { cartItemsSelector } from '../../Redux/cart/cart.selectors';

import './CartDropdown.styles.scss';

//actions ( Redux )
import { toggleDropdown } from '../../Redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history,toggleCartDropdown }) => (
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
        <CustomButton 
            onClick={()=>{
                toggleCartDropdown()
                history.push('/checkout')
                }
            } 
            style = {{padding : 0}
        }>
        GO TO CHECKOUT
        </CustomButton>        
    </div>
)

const mapStateToprops = (state) => ({
    cartItems : cartItemsSelector(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleDropdown())
})

export default withRouter(connect(mapStateToprops,mapDispatchToProps)(CartDropdown))