import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { Link } from "react-router-dom";
// import { getProduct } from "../redux/actions/productActions";
// import { setReducer } from "../redux/reducers/productReducers";

export default function ProductList() {
  // const myState = useSelector((state) => state.setReducer.action.payload);
  // const dispatch = useDispatch();
  console.log(store.getState().setReducer, "State data value");
  return (
    <div className="row">
      {store.getState().setReducer.map((product) => {
        return (
          <div
            key={product.id}
            className="col-sm-12 col-md-6 col-lg-4 my-5"
            onClick={
              //   (dispatch(getProduct(product.id)),
              console.log(product.id, "product id")
            }
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
                className="card-img-top"
                alt="product image"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.model}</p>
                <p className="card-text">{product.price}</p>
              </div>
              <button className="btn btn-outline-primary">
                <Link to={`product/${product.id}`}>Product details</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
