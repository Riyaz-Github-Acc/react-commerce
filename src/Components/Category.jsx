import { Link } from "react-router-dom";

import "./Category.scss";

const Category = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img src="images/category/women.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/4">
              Women
            </Link>
          </button>
        </div>

        <div className="row">
          <img src="images/category/new-arrivals.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/6">
              New Arrivals
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row men-link">
          <img src="images/category/men.jpeg" alt="" />
          <button>
            <Link className="link " to="/products/3">
              Men
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="images/category/kids.jpeg" alt="" />
              <button>
                <Link className="link" to="/products/5">
                  Kids
                </Link>
              </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <img src="images/category/shoes.jpeg" alt="" />
              <button>
                <Link className="link" to="/products/7">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img src="images/category/accessories.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/8">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
