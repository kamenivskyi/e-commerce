import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HaU7TAtGGS7YeGNIl4m1OlZYRqfv5nERlQBBb0IH8cHnVIkH5O4pnC74bLFVwFwWDuPMD8sgDiGOgxIAL97rEv8001ATSwWRn';

  const onToken = token => {
    console.log(token);
    alert('Payment sucessful!')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Payment for clothes'
      image='https://sendeyo.com/up/d/f3eb2117da'
      panelLabel='Pay Now'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      token={onToken}
      billingAddress
      shippingAddress
    />
  )
}


export default StripeCheckoutButton;