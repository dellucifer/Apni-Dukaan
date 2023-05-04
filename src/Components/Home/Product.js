import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { AiFillStar } from 'react-icons/ai'

function Product({ id, title, price, rating, image, rate_count }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // pushing item to global data
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p><AiFillStar color="#eb5200"size={20}/></p>
          <p> {rating}</p><p>/5</p>
          <p>&nbsp;{' '}{'('}{rate_count}&nbsp;{'users rated)'}</p>
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
