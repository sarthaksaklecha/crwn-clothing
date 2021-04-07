import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
      const priceForStripe = price*100;
      const publishableKey = 'pk_test_51IdMZwSDVdiKtbCCe6p1yc4LUaDh0s6evD5b4PAuxe1gbDYJdWm9AapBRQjWlNZ3V67UDfbGL6ymEMcETGKUrWe4002kLUjdyL';
      
      const onToken = token => {
          console.log(token)
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

export default StripeCheckoutButton