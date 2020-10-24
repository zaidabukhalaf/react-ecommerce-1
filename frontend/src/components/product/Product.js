import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const ratingArr = product.ratings.length === 0 ? [] : product.ratings;
  const rattingValues =
    ratingArr.reduce((total, next) => total + next.Rating, 0) /
    !isNaN(ratingArr.length);
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img
          src={`http://localhost:1337${product.thumbnail.url}`}
          varient="top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={rattingValues}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
