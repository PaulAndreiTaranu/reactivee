import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../assets/svg/crown.svg";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H0S4PL7KTFn7h8NwY2ZiEMEgUqbiadNlFb7TdGI2VW8000dbZzbmgn31NEo5uiqdBZRE3L2yslM1IvTynQu6Lpn00hKBvuD7A";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Fresh as KEK"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
