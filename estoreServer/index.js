const express = require('express')
const app = express()
const cors = require('cors')

// Import route files
const products = require('./Routes/product')
const productCategories = require('./Routes/productCategories')




app.use(cors())
// Use route file as middleware
app.use('/productCategories', productCategories)
app.use('/getProducts', products)


const PORT = 5001
// Start the server
const server = app.listen(PORT, () => {
  console.log(`App is running on the port - ${PORT} `)
})