import React from "react";
import "./Product.css";
import Rating from "../Rating";

function Product(props) {
  const { _id, image, title, price, rating, reviews } = props.product;

  return (
    <div className="product ">
      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="about__product">
        <p className="product__details">{title}</p>

        <p>
          <small>XAF</small>
          <strong> {price}</strong>
        </p>

        <Rating rating={rating} reviews={reviews} />

        <button /* onClick={addToCart} */ className="addtocart btn">
          Add to cart
        </button>

        <a href={`/product/${_id}`} className="learn-more">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Product;
