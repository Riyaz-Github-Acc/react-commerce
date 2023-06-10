import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { removeItem, resetCart } from "../Redux/cartReducer";

import "./Cart.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h3>Products in your cart</h3>

      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={import.meta.env.VITE_STRAPI_UPLOAD_URL + item.image}
            alt=""
          />

          <div className="details">
            <div className="content">
              <h4>{item.title}</h4>
              <p>{item.desc?.substring(0, 50)}</p>
              <div className="price">
                {item.quantity} x ₹ {item.price}
              </div>
            </div>
            <div
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            >
              <DeleteOutlineIcon />
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹ {totalPrice()}</span>
      </div>

      <div className="checkout-btn">
        <button>PROCEED TO CHECKOUT</button>
        <span onClick={() => dispatch(resetCart())}>Reset</span>
      </div>
    </div>
  );
};

export default Cart;
