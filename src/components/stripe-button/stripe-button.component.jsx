import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_AmIQ1UOpnSuSdZwnj5QK3sgA004yob5kyW';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN CLothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        descripton={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );

};


export default StripeCheckoutButton;