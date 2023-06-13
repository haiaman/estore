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

// Define Category routes

// Handle GET request for all categories
router.get('/', (req, res) => {

  let categoryData;

  pool.query("Select * from categories", (error, categories) => {
    if (error) {
      categoryData = error;
      res.status(500).send(categoryData)
    } else {
      categoryData = categories
      res.status(200).send(categoryData)
    }

  })

})

module.exports = router;