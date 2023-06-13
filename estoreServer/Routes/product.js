const express = require('express')
const mysql = require('mysql2')
const router = express.Router()


const pool = mysql.createPool({

  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'estore',
  port: 3306,
  multipleStatements: true
})

// Get all products
router.get('/', (req, res) => {

  let productData;
  pool.query("select * from products", (err, products) => {

    if (err) {
      res.status(500).send(err)
    } else {
      productData = products
      res.status(200).send(productData)
    }
  })
})
module.exports = router
