import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkoutAd"
        src="https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-1450520058Odj.jpg"
        alt="banner"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkoutTitle">Your Shopping Basket </h2>
          {/* list out all items*/}
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              rating
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
