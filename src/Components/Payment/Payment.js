import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getTotalBasket } from "../../reducer";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(null);
  const [succeeded, setSucceeded] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const url = "https://famous-sheath-dress-newt.cyclic.app/processing";
      var res = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          total: getTotalBasket(basket) * 100,
        }),
      });

      res = await res.json();

      if (res.client_secret) {
        setClientSecret(res.client_secret);
      }
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    console.log(elements.getElement(CardElement));

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
          // It means payment confirmation
          db
          .collection("users")
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount /100,
            created: paymentIntent.created
          })

          setSucceeded(true);
          // error(null);
          setProcessing(false);
        }

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });
      })
      .catch((err) => {
        alert("Payment Failed, Kindly try again");
        setProcessing(false);
        console.warn(err);
      });
  };

  const handleChange = (e) => {
    // Listen for changes in CardElement
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
          <div className="payment__details">
            {/* Stripe Magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getTotalBasket(basket).toFixed(2)}
                  displayType={"text"}
                  thousandSeprator={true}
                  prefix={"₹"}
                />

                <button
                  disabled={processing || disable || succeeded}
                  className="payment__button"
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
