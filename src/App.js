import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import { ViewportProvider } from "./components/utils/viewPortHandler";
import ProductListing from "./components/productListing/productListing";
import Footer from "./components/Footer/Footer";
import ProductSearchResults from "./components/productSearchResults/ProductSearchresults";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Provider, connect } from "react-redux";
import { FetchCategories } from "./redux/actions/CategoriesActions";
import store from "./redux";
import Start from "./start";
function App({ props }) {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
}

export default App;
