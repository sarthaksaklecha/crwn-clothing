import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import { clearAll } from '../../Redux/cart/cart.actions';
import { connect } from 'react-redux'

const StripeCheckoutButton = ({ price,clearAll }) => {
      const priceForStripe = price*100;
      const publishableKey = 'pk_test_51IdMZwSDVdiKtbCCe6p1yc4LUaDh0s6evD5b4PAuxe1gbDYJdWm9AapBRQjWlNZ3V67UDfbGL6ymEMcETGKUrWe4002kLUjdyL';
      
      const onToken = token => {
          console.log(token)
          clearAll();
          alert('Payment Successful')
      }
      return (
          <StripeCheckout 
            label = 'Pay Now'
            name = 'Crwn clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'http://svgshare.com/i/CUz.svg'
            description = {`Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
          />
      )
}

const mapDispatchToProps = (dispatch) => ({
  clearAll : () => dispatch(clearAll())
})
export default connect(null,mapDispatchToProps)(StripeCheckoutButton)