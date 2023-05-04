import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
              const fetched_product = data.map((item) => ({
                id: item.id,
                image: item.image,
                price: item.price*40,
                title: item.title,
                rating: item.rating.rate,
                rate_count: item.rating.count
              }))
              
              setProducts(fetched_product);
            })
    }

    getProducts();
  }, [])

  console.log(products)

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
        {products?.map((item, i) => {
          return(
            <Product key={i} id={item.id} title={item.title} price={item.price} rating={item.rating} rate_count={item.rate_count} image={item.image} />
          )
        })}
      </div>

      {/* <div className="home__row">
        <Product id={4} title='The Ultimate Lean Startup' price={499} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'/>
        <Product id={5} title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
        price={2499} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'/>
      </div>
      
      <div className="home__row">
        <Product id={1} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
         price={11999} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
        <Product id={2} title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={16999} rating={5} image="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1.fit_lim.size_1200x630.v1601052236.jpg"/>
        <Product id={3} title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={100000} rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
      </div>

      <div className="home__row">
        <Product id={6} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price={49000} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
      </div> */}
    </div>
  );
}

export default Home;
