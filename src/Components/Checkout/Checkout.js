import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={process.env.PUBLIC_URL + "/banner_2.png"}
          alt=""
        />
        <div>
          <h3>Welcome {user?.email.split('@')[0]},</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((item, i) => (
          <CheckoutProduct key={i} id={item.id} price={item.price} image={item.image} rating={item.rating} title={item.title}/>
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
