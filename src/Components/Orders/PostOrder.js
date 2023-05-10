import React from "react";
import "./PostOrder.css";
import moment from "moment/moment";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function PostOrder({ order }) {
  console.log(order);
  return (
    <div className="postOrder">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="postOrder__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, i) => {
        return (
          <CheckoutProduct
            key={i}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            hideButton={true}
          />
        );
      })}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="postOrder__total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default PostOrder;
