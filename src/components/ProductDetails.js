import React from "react";
import { useParams } from "react-router";
import store from "../redux/store";
import { useEffect } from "react";
import { getProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const dispatch = useDispatch();

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchApi = async () => {
      let url = `https://aveosoft-react-assignment.herokuapp.com/products/${id}`;
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(response);
        }
        const resJson = response.json();
        return resJson;
      } catch (exception) {
        console.log("api call failed");
      }
    };
    let allProducts = fetchApi();
    allProducts.then((jsonProducts) => {
      console.log(jsonProducts);
      dispatch(getProduct(jsonProducts));
      // console.log("setreducer", setProduct(jsonProducts));
      // console.log("state", store.getState().setReducer);
    });
  });

  return (
    <div>
      Product details
      <div className="container mx-auto my-3">
        {store.getState().getReducer.map((product) => {
          console.log("hello w");
          return (
            <div
              key={product.id}
              className="col-sm-12 col-md-6 col-lg-4 my-5"
              onClick={
                (dispatch(getProduct(product.id)),
                console.log(product.id, "dasdfasf"))
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
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
