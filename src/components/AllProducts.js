import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import store from "../redux/store";
import { setProduct } from "../redux/actions/productActions";
// import { setReducer } from "../redux/reducers/productReducers";
import ProductList from "./ProductList";

export default function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      let url = `https://aveosoft-react-assignment.herokuapp.com/products`;
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
      dispatch(setProduct(jsonProducts));
      // console.log("setreducer", setProduct(jsonProducts));
      // console.log("state", store.getState().setReducer);
    });
  });

  return (
    <div className="container">
      <ProductList />
    </div>
  );
}
