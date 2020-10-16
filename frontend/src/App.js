import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container } from "react-bootstrap";
import ProductsList from "./components/product/ProductsList";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <div className="hero py-3">
        <Container>
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/:id" component={ProductDetails} />
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
