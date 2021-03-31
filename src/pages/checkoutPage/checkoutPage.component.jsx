import React from 'react';

import './checkoutPage.styles.scss';

import { connect } from 'react-redux';

//component
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

//selectors
import { cartItemsSelector } from '../../Redux/cart/cart.selectors'
import { cartTotalSelector } from '../../Redux/cart/cart.selectors'

const CheckoutPage = ({ cartItems, total }) => (
    <div className ='checkout-page'>
      <div className = 'checkout-header'>
        <div className = 'header-block'>
          <span>Products</span>
        </div>
        <div className = 'header-block'>
          <span>Description</span>
        </div>
        <div className = 'header-block'>
          <span>Quantity</span>
        </div>
        <div className = 'header-block'>
          <span>Price</span>
        </div>
        <div className = 'header-block'>
          <span>Remove</span>
        </div>
        <div className = 'header-block'>
          <span>Products</span>
        </div>
      </div>
      {
        cartItems.map(item=> <CheckoutItem key={item.id} item={item} />)
      }
      <div className='total'>
      TOTAL = ${total}
      </div>
    </div>
)

const mapStateToProps = state => ({
  cartItems : cartItemsSelector(state),
  total : cartTotalSelector(state)
})

export default connect(mapStateToProps)(CheckoutPage)

