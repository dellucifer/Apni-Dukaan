import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider'
import { getTotalBasket } from "../../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [ {basket}, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalBasket(basket).toFixed(2)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"₹"}
      />

      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
