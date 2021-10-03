import AllProducts from "./components/AllProducts";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Category />
          <AllProducts />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/categories/:category">
          <Category />
        </Route>
        <Route>
          <div className="container bg-danger text-warning vh-100">
            {"404 Error not found"}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
