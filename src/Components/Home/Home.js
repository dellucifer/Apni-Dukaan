import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import data from "./ProductsList.json";
import { BarLoader } from "react-spinners";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + "/Banner.png"}
          alt=""
        />
      </div>

      <div className="home__products">
        {data?.map((item, i) => {
          return (
            <Product
              key={i}
              id={item.id}
              title={item.title}
              price={40 * item.price}
              rating={item.rating.rate}
              rate_count={item.rating.count}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
