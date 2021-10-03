import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/actions/productActions";
// import { setReducer } from "../redux/reducers/productReducers";

export default function Category() {
  let { category } = useParams();
  console.log("category is", category);

  const getCategoryId = (category) => {
    if (category === "Laptops") {
      return 0;
    } else if (category === "Mobiles") {
      return 1;
    } else {
      return "notDefined";
    }
  };

  const dispatch = useDispatch();
  let filteredProducts = store.getState().setReducer.filter((product) => {
    return product.categoryId === getCategoryId(category);
  });
  return (
    <div className="container">
      <div className="dropdown my-3">
        <button
          className="btn btn-dark dropdown-toggle btn-large"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link className="dropdown-item" to="/categories/Laptops">
              Laptops
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/categories/Mobiles">
              Mobiles
            </Link>
          </li>
        </ul>
      </div>

      <div className="row my-3">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="col-sm-12 col-md-6 col-lg-4 my-5"
              onClick={
                (dispatch(getProduct(product.id)),
                console.log(product.id, "product id"))
              }
            >
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
                  className="card-img-top"
                  alt="product image"
                  style={{ width: "90%", margin: "15px auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.model}</p>
                  <p className="card-text">{product.price}</p>
                </div>

                <button className="btn btn-dark">
                  <Link
                    to={`product/${product.id}`}
                    className="text-decoration-none fw-bold text-light"
                  >
                    Product details
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
