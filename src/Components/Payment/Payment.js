import React from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({basket?.length} items)</h1>
        {/* Delivery Details */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Apna House, Sangrur,</p>
            <p>Punjab, India</p>
          </div>
        </div>

        {/* Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                price={item.price}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            {/* Stripe Magic */}
        </div>
      </div>
    </div>
  );
}

export default Payment;
