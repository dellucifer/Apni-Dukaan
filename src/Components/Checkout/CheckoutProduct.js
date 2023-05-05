import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

//   const removeFromBasket = () => {
//     dispatch({
//       type: "REMOVE-FROM-BASKET",
//       id: id,
//     });
//   };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <button onClick={() => dispatch({ type: 'REMOVE_FROM_BASKET', id: id })}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
