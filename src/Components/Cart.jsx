import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 2,
      img: "/images/card/img-3.jpeg",
      img2: "images/card/img-4.jpeg",
      title: "Coat",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quasi.",
      isNew: false,
      oldPrice: 1000,
      newPrice: 700,
    },

    {
      id: 3,
      img: "/images/card/img-5.jpeg",
      img2: "images/card/img-6.jpeg",
      title: "T-Shirt",
      isNew: true,
      oldPrice: 250,
      newPrice: 100,
    },
  ];

  return (
    <div className="cart">
      <h3>Products in your cart</h3>

      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />

          <div className="details">
            <div className="content">
              <h4>{item.title}</h4>
              <p>{item.desc?.substring(0, 50)}</p>
              <div className="price">1 x ₹ {item.newPrice}</div>
            </div>
            <div className="delete">
              <DeleteOutlineIcon />
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹ 2,000</span>
      </div>

      <div className="checkout-btn">
        <button>PROCEED TO CHECKOUT</button>
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Cart;
