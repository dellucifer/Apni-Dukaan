// const functions = require("firebase-functions");
// const express = require("express")
// const cors = require("cors");
// const stripe = require("stripe")('sk_test_51N4PN6SFoHmNIl3oyTFBYw1a8piPEbKMSDihILIsj8Q0lfXx2gYQmdXKFBHcdBJ2rlF971ES11D1hp7wi5hwtN2400AAwAIrNd')

// // App config
// const app = express();

// // Middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// // API Routes
// app.get('/', (request, response) => response.status(200).send('Hello Guys'))

// app.get('/payments.create', async (request, response) => {
//     const total = request.query.total;
//     console.log("Boom payment received of", total);

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: 'inr'
//     });

//     // Created
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret
//     })
// })

const express = require('express')
const bp = require('body-parser')
require('dotenv').config()
const app = express()
const port = 5000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

var cors = require('cors')
app.use(cors())

const stripe = require('stripe')('sk_test_51N4PN6SFoHmNIl3oyTFBYw1a8piPEbKMSDihILIsj8Q0lfXx2gYQmdXKFBHcdBJ2rlF971ES11D1hp7wi5hwtN2400AAwAIrNd');

app.get('/', (request, response) => response.status(200).send('Hello Del'))
app.post('/processing', async (req, res) => {
    try {
        const { total } = req.body
        if (total === 0) {
            return res.json(`Can't pay the amount zero`)
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'inr',
            payment_method_types: ['card'],
        });
        if (paymentIntent.client_secret) {
            res.json(paymentIntent)
        }
        res.status(200).send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        res.status(401).json(error);
    }
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

