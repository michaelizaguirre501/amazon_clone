import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="homeImage"
        src="https://m.media-amazon.com/images/I/71D3NLwrb6L._SX3000_.jpg"
        alt="Banner for audible service"
      />
      {/* product*/}
      <div className="homeRow">
        <Product
          id="12345"
          title="Example"
          price="15.00"
          rating={5}
          image="https://m.media-amazon.com/images/I/71rhMv9KDYL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
