import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'

function Product({id, title, price, rating, image}) {

  const [ {basket}, dispatch] = useStateValue();
  console.log(basket)

  const addToBasket = () => {
    // pushing item to global data
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    })
  }

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating).fill().map((_, i) => (
                  <p>🌟</p>
              ))}
            </div>
        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product
