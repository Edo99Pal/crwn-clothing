import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K8MVyGsqJpxK7EVuXazTVX4VmiZeimgCNBEewZHXgiSfyCQKftm0QHfe2UAmzs4KxAAESHmm3EsUb5e96zPGQ2v00MSrTxzqR';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='../../assets/credit-card-icon-png-4401.png'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;