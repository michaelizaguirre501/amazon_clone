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
          id="1"
          title="Vitamix 5200 Blender Professional-Grade"
          price="432.99"
          rating={4}
          image="https://m.media-amazon.com/images/I/71qy1IaCUqL._AC_SX679_.jpg"
        />
        <Product
          id="2"
          title="SteelSeries Arctis 9X Wireless Gaming Headset – Integrated Xbox Wireless + Bluetooth "
          price="199.99"
          rating={5}
          image="https://m.media-amazon.com/images/I/81t7C7EiagL._AC_SX522_.jpg"
        />
      </div>
      <div className="homeRow">
        <Product
          id="3"
          title="Funko Pop! Star Wars: The Mandalorian - The Child, Grogu with Cookie"
          price="8.79"
          rating={5}
          image="https://m.media-amazon.com/images/I/510GfbgM02L._AC_SX569_.jpg"
        />
        <Product
          id="4"
          title="Whiskey Glasses-Premium 11 OZ Scotch Glasses Set of 6 /Old Fashioned Whiskey Glasses"
          price="15.00"
          rating={3}
          image="https://m.media-amazon.com/images/I/81rX4xm2BBL._AC_SL1500_.jpg"
        />
        <Product
          id="5"
          title="Breville BNV250CRO Nespresso Vertuo, Espresso Machine, Black"
          price="249.50"
          rating={5}
          image="https://m.media-amazon.com/images/I/71rhMv9KDYL._AC_SX679_.jpg"
        />
      </div>
      <div className="homeRow">
        <Product
          id="6"
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
          price="1339.99"
          rating={4}
          image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
