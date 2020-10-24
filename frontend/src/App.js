import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container } from "react-bootstrap";
import ProductsList from "./components/product/ProductsList";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/cart";

function App() {
  return (
    <Router>
      <Header />
      <div className="hero py-3">
        <Container>
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
