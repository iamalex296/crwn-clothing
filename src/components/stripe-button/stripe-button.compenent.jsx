import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51IiIVSFR2CEhd30bccL3ExVzSidRbhideG1BMU1lmDrHsUVmwH8b9Bm0q5FHyDkVNS7xlEaK2Vi9VwCttUIuEhwo00Oaqrib2Q'
  const onToken = token => {
    console.log(token)
    alert('Payment Successfull')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='Fashion Clothes'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      key={publishableKey}
    />
  )
}

export default StripeCheckoutButton;