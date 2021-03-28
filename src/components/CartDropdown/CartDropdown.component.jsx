import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './CartDropdown.styles.scss';

export const CartDropdown = () => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items' />
        <CustomButton style = {{padding : 0}}>GO TO CHECKOUT</CustomButton>        
    </div>
)
