import React from "react";
import { useParams } from "react-router";
// import store from "../redux/store";
import { useEffect } from "react";
import { getProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

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
  }, []);

  const myState = useSelector((state) => state.getReducer);
  // const dispatch = useDispatch();

  // let filteredProducts = store.getState().getReducer.filter((product) => {
  //   return true;
  // });
  // console.log(
  //   store.getState().getReducer,
  //   myState,
  //   "State data value from details page"
  // );

  return (
    <div>
      <h1 className="text-center my-4">Product details</h1>
      <div className="container mx-auto my-3">
        {myState.map((product) => {
          // console.log("hello w");
          return (
            <div
              key={product.id}
              className="col-sm-12 my-5"
              // onClick={
              //   (dispatch(getProduct(product.id)),
              //   console.log(product.id, "dasdfasf"))
              // }
            >
              <div className="row mx-auto">
                <div className="col-md-6">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
                    className="card-img-top"
                    alt="product image"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="fs-bold">
                    <strong>Name : </strong>
                    {product.name}
                  </h5>
                  <p className="card-text my-3">
                    <strong>Model : </strong>
                    {product.model}
                  </p>
                  <p className="card-text">
                    <strong>Price : </strong>
                    {product.price}
                  </p>
                  <p className="card-text">
                    <strong>Description : </strong>
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
