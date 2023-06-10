import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
          {item?.attributes?.isNew && <span>New Product!</span>}
          {item?.attributes?.isSale && <span>Summer Sale!</span>}
          <img
            src={
              import.meta.env.VITE_STRAPI_UPLOAD_URL +
              item.attributes?.image?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              import.meta.env.VITE_STRAPI_UPLOAD_URL +
              item.attributes?.image2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h4>{item?.attributes.title}</h4>
        <div className="prices">
          <h5>₹ {item.oldPrice || item?.attributes?.price + 100}</h5>
          <h5>₹ {item.newPrice || item?.attributes?.price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
