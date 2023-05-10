import React from "react";
import "./Home.css";
import Product from "./Product";
import data from "./ProductsList.json"

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/Banner.png"
          alt=""
        />
      </div>

      <div className="home__products">
        {data?.map((item, i) => {
          return(
            <Product key={i} id={item.id} title={item.title} price={item.price} rating={item.rating.rate} rate_count={item.rating.count} image={item.image} />
          )
        })}
      </div>
    </div>
  );
}

export default Home;
