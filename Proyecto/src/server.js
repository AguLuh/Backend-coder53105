const express = require('express')
const cartRouter = require('./routes/carts.router.js')
const productRouter = require('./routes/products.router.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use('/api/carts', cartRouter)
app.use('/api/products', productRouter)


