import { useState } from "react";
import { useParams } from "react-router-dom";
import { VerifiedUser, AddShoppingCart } from "@mui/icons-material";

import Spinner from "./Spinner";
import useFetch from "../Hooks/useFetch";

import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="container">
        {error ? (
          "Something went wrong!"
        ) : loading ? (
          <Spinner />
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    import.meta.env.VITE_STRAPI_UPLOAD_URL +
                    data?.attributes?.image?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("image")}
                />
                <img
                  src={
                    import.meta.env.VITE_STRAPI_UPLOAD_URL +
                    data?.attributes?.image2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("image2")}
                />
              </div>
              <div className="main-img">
                <img
                  src={
                    import.meta.env.VITE_STRAPI_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>

            <div className="right">
              <h3>{data?.attributes?.title}</h3>
              <div className="price">₹ {data?.attributes?.price}</div>
              <p>{data?.attributes?.desc}</p>

              <div className="wrapper">
                <div className="quantity">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((prev) => prev + 1)}>
                    +
                  </button>
                </div>

                <div className="cart-btn">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          title: data.attributes.title,
                          desc: data.attributes.desc,
                          image: data.attributes.image.data.attributes.url,
                          price: data.attributes.price,
                          quantity,
                        })
                      )
                    }
                  >
                    <AddShoppingCart />
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="shipping">
                <h4>Free shipping on orders over ₹ 5,000!</h4>
                <div className="icon-text">
                  <VerifiedUser />
                  Satisfaction Guaranteed
                </div>
                <div className="icon-text">
                  <VerifiedUser />
                  No Hassle Refunds{" "}
                </div>
                <div className="icon-text">
                  <VerifiedUser />
                  Secure Payments
                </div>
              </div>

              <div className="safety">
                <fieldset>
                  <legend>SAFE CHECKOUT WITH</legend>
                  <img src="../../images/product/stripe-logo.png" alt="" />
                </fieldset>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
