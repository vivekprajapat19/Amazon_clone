import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [ { basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <span className="subtotal__gift">
              <input type="checkbox" />
               This order contains a gift
            </span>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => navigate('/payment')} >Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;