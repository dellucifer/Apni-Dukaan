# Apni-Dukaan

## Description
Apni-Dukaan is a type of ecommerce site. Actually it is a clone of one of the biggest ecommerce website Amazon.in made by cloning the features of Amazon. This web applicatoin is currently hosted at [Apni-Dukaan](https://apni-dukaan-29374.web.app/). For the moment, It is only optimized for PC resolutions.

## Technologies
- HTML/CSS
- JavaScript
- ReactJs
- NodeJs
- Firebase/FireStore
- Git/GitHub
- Stripe/APIs
- Some other JS libraries

## Features
### Awesome Landing Page
The landing of the website is made using HTML and custom CSS. It has a specific colour theme and attractive background showing the opening of sale for users. This is done by keeping in mind of user experience.
<p align="center">
  <img src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/apni_dukaan_landing.jpg" alt="Loading..."
</p>
<hr>

### Product List
The product list is designed using grids and flex CSS. But the products are getting populated by fetching data from fakestore API (Application Programming Interface). There are some hover effects and ratings. A button is there to add that specific product into the cart.
<p align="center">
  <img src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/apni_dukaan_products.jpg" alt="Loading..."
</p>
<hr>

### Cart
All the products added in the cart from the products list, they will appear in the cart section. And it will automatically calculate the total pricing. An interactive advertisement is also shown at the top. To further proceed and buy the products, a button is there.
<p align="center">
  <img src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/apni_dukaan_checkout.jpg" alt="Loading..."
</p>
<hr>

### Order History
All the orders for which the payment is done successfully, they will all show here in the order history section with unique cart ID and the cart details.
<p align="center">
  <img src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/apni_dukaan_checkout.jpg" alt="Loading..."
</p>
<hr>

### Payment Page
This page is the most important page with the perspective of ecommerce website. This page involves the payment gateway. Currently it is supported by Stripe API. It will ask for card details to checkout to buy the products. You can use a dummy card `2424242424242424`|`24/24`|`24242`.
<p align="center">
  <img src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/apni_dukaan_history.jpg" alt="Loading...">
</p>
<hr>

### Hosting and Database
The hosting is on `Firebase` and the database used is `FireStore`. And a node server is also hosted on cyclic platform to facilitate the payment gateway withour leaking APIs on the frontend.
<hr>

Made with Love by Dellucifer
