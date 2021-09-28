import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const noUserAdd = () => {
    history.push("/login");
  };

  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={!user ? noUserAdd : addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
